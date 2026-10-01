import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

/**
 * Shows how Vela reads a date string sent as date_of_call (Calls) or date
 * (Chats). Both are parsed with moment.tz(value, "DD/MM/YYYY, HH:mm:ss",
 * "Africa/Johannesburg") in non-strict mode (vela-data call/upload and
 * chats/upload routes, main and dev-hold). Non-strict parsing means:
 *
 *  - Any day-first date is read, whatever the separators, and a missing time
 *    or missing seconds become zero. 15/01/2025 14:30 is read correctly.
 *  - A year-first date such as 2025/01/15 is read as the wrong date
 *    (20 January 2015) with no error, even with validate_metadata.
 *  - An ISO date such as 2025-01-15 cannot be read, so the interaction falls
 *    back to the upload time (or returns 400 with validate_metadata).
 *
 * Verified by running vela-data's own moment-timezone on 2026-10-01.
 */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_FIRST = /^(\d{1,2})\D+(\d{1,2})\D+(\d{4})(?:\D+(\d{1,2})(?:\D+(\d{1,2}))?(?:\D+(\d{1,2}))?)?\s*$/;
const pad = (n) => String(n).padStart(2, '0');

function check(value) {
  const v = value.trim();
  if (!v) return { state: 'empty' };

  if (/^\d{4}-\d{1,2}-\d{1,2}/.test(v)) {
    return { state: 'fallback', hint: 'This is ISO format, which Vela cannot read. Send the day first, for example 15/01/2025, 14:30:00.' };
  }
  if (/^\d{4}\D/.test(v)) {
    return { state: 'wrong', hint: 'A date that starts with the year is read as a different, wrong date, and no error is raised, even with validate_metadata. Send the day first, for example 15/01/2025, 14:30:00.' };
  }

  const m = DAY_FIRST.exec(v);
  if (!m) {
    return { state: 'fallback', hint: 'Send the day first, then the month and the four-digit year, for example 15/01/2025, 14:30:00.' };
  }
  const d = Number(m[1]), mo = Number(m[2]), y = Number(m[3]);
  const h = Number(m[4] ?? 0), mi = Number(m[5] ?? 0), s = Number(m[6] ?? 0);
  const dt = new Date(y, mo - 1, d);
  const realDate = mo >= 1 && mo <= 12 && dt.getMonth() === mo - 1 && dt.getDate() === d;
  const realTime = h <= 23 && mi <= 59 && s <= 59;
  if (!realDate) {
    return { state: 'fallback', hint: `${m[1]}/${m[2]}/${m[3]} is not a real date when read day first, then month.` };
  }
  if (!realTime) {
    return { state: 'fallback', hint: 'That is not a real time of day.' };
  }
  const reading = `${d} ${MONTHS[mo - 1]} ${y}, ${pad(h)}:${pad(mi)}:${pad(s)}, Africa/Johannesburg`;
  const ambiguous = d <= 12 && mo <= 12 && d !== mo;
  return {
    state: 'ok',
    reading,
    hint: ambiguous
      ? `Vela always reads the day first. If you meant ${MONTHS[d - 1]} ${mo}, your system sends dates month first, and Vela stores every one of them as the wrong date, with no error.`
      : null,
  };
}

export default function DateFormatChecker() {
  const [value, setValue] = useState('15/01/2025, 14:30:00');
  const result = useMemo(() => check(value), [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.label}>Date string</span>
          <input
            type="text"
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>

      {result.state === 'ok' && (
        <p className={`${styles.result} ${styles.ok}`}>
          <strong>Accepted.</strong> Vela reads this as {result.reading}.
          {result.hint && <> {result.hint}</>}
        </p>
      )}
      {result.state === 'wrong' && (
        <p className={`${styles.result} ${styles.bad}`}>
          <strong>Stored as the wrong date.</strong> {result.hint}
        </p>
      )}
      {result.state === 'fallback' && (
        <p className={`${styles.result} ${styles.bad}`}>
          <strong>Falls back to the upload time.</strong> Vela cannot read
          this, and no error is raised unless you also send{' '}
          <code>validate_metadata</code>. {result.hint}
        </p>
      )}
      {result.state === 'empty' && (
        <p className={styles.result}>
          With no date sent, the interaction is dated to the upload time.
        </p>
      )}
    </div>
  );
}

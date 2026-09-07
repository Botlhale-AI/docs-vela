import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

/**
 * Checks a date string against the format Vela's upload expects, and shows
 * what happens to a value it cannot read: the interaction is dated to the
 * upload time, with no error. That silent fallback is the thing this is
 * here to make visible.
 *
 * The Calls endpoint wants DD/MM/YYYY, HH:mm:ss. The Chats endpoint takes
 * the same with the seconds optional. Both are read as Africa/Johannesburg.
 */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const PATTERN = /^(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2})(?::(\d{2}))?$/;

function check(value, endpoint) {
  const v = value.trim();
  if (!v) return { state: 'empty' };

  const m = PATTERN.exec(v);
  if (m) {
    const [, dd, mm, yyyy, hh, min, ss] = m;
    const d = Number(dd), mo = Number(mm), h = Number(hh), mi = Number(min);
    const s = ss === undefined ? 0 : Number(ss);
    const dt = new Date(Number(yyyy), mo - 1, d);
    const realDate = dt.getMonth() === mo - 1 && dt.getDate() === d && mo >= 1 && mo <= 12;
    const realTime = h <= 23 && mi <= 59 && s <= 59;
    if (!realDate) return { state: 'bad', hint: `${dd}/${mm}/${yyyy} is not a real date. The order is day, then month.` };
    if (!realTime) return { state: 'bad', hint: `${hh}:${min}${ss ? ':' + ss : ''} is not a real time of day.` };
    if (endpoint === 'calls' && ss === undefined)
      return { state: 'bad', hint: 'The Calls endpoint wants the seconds too: HH:mm:ss.' };
    return {
      state: 'ok',
      reading: `${d} ${MONTHS[mo - 1]} ${yyyy}, ${hh}:${min}:${ss === undefined ? '00' : ss}, Africa/Johannesburg`,
    };
  }

  // Not an exact match. Work out the most likely reason.
  let hint = 'Send exactly DD/MM/YYYY, HH:mm:ss, for example 15/01/2025, 14:30:00.';
  if (/\d{4}-\d{2}-\d{2}/.test(v) || /T\d{2}:/.test(v))
    hint = 'This looks like ISO format. Vela wants DD/MM/YYYY, HH:mm:ss.';
  else if (v.includes('-'))
    hint = 'Use slashes between the date parts, not dashes.';
  else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(v))
    hint = 'The time is missing. Add it as , HH:mm:ss.';
  else if (/^\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}/.test(v))
    hint = 'Put a comma and a space between the date and the time.';
  else if (/^\d{1,2}\/\d{1,2}\/\d{2},/.test(v))
    hint = 'The year needs all four digits.';
  return { state: 'bad', hint };
}

export default function DateFormatChecker() {
  const [value, setValue] = useState('15/01/2025, 14:30:00');
  const [endpoint, setEndpoint] = useState('calls');

  const result = useMemo(() => check(value, endpoint), [value, endpoint]);

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
        <label className={styles.field}>
          <span className={styles.label}>Endpoint</span>
          <select
            className={styles.select}
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          >
            <option value="calls">Calls (date_of_call)</option>
            <option value="chats">Chats (date, time)</option>
          </select>
        </label>
      </div>

      {result.state === 'ok' && (
        <p className={`${styles.result} ${styles.ok}`}>
          <strong>Accepted.</strong> Vela reads this as {result.reading}.
        </p>
      )}
      {result.state === 'bad' && (
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

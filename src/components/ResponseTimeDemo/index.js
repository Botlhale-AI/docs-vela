import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

/**
 * Shows how Vela works out a chat's average response time, and why a
 * capitalised sender quietly drops an exchange out of the average.
 *
 * Vela sorts the messages by time, then for each `user` message it finds
 * the next `agent` or `bot` message and counts the seconds between them.
 * The values are matched exactly and in lower case, so `Agent` is read as
 * neither an agent nor a bot, and that pair is never counted.
 */

const REPLY_SENDERS = new Set(['agent', 'bot']);

const parseTime = (t) => {
  const m = /(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(t.trim());
  if (!m) return null;
  return Number(m[1]) * 3600 + Number(m[2]) * 60 + (m[3] ? Number(m[3]) : 0);
};

const EXAMPLE = [
  { sender: 'user', time: '14:30:00', message: 'Hi, my order has not arrived.' },
  { sender: 'agent', time: '14:30:20', message: 'Sorry to hear that. Let me check.' },
  { sender: 'user', time: '14:31:10', message: 'Thanks. It has been a week.' },
  { sender: 'agent', time: '14:31:45', message: 'I can see it is delayed. I will resend it today.' },
];

export default function ResponseTimeDemo() {
  const [rows, setRows] = useState(EXAMPLE);

  const update = (i, field, value) =>
    setRows((r) => r.map((row, j) => (j === i ? { ...row, [field]: value } : row)));
  const addRow = () =>
    setRows((r) => [...r, { sender: 'user', time: '', message: '' }]);
  const removeRow = (i) => setRows((r) => r.filter((_, j) => j !== i));
  const reset = () => setRows(EXAMPLE);

  const analysis = useMemo(() => {
    const parsed = rows
      .map((r, i) => ({ ...r, i, secs: parseTime(r.time) }))
      .filter((r) => r.secs !== null)
      .sort((a, b) => a.secs - b.secs);

    const times = [];
    const counted = new Set();
    let waiting = null;
    for (const r of parsed) {
      if (r.sender === 'user') {
        waiting = r;
      } else if (waiting && REPLY_SENDERS.has(r.sender)) {
        times.push(r.secs - waiting.secs);
        counted.add(waiting.i);
        counted.add(r.i);
        waiting = null;
      }
    }
    const avg = times.length ? times.reduce((a, b) => a + b, 0) / times.length : null;
    return { avg, count: times.length, counted };
  }, [rows]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.result}>
        {analysis.avg === null ? (
          <>No exchanges counted yet.</>
        ) : (
          <>
            <strong>Average response time: {analysis.avg.toFixed(1)} seconds</strong>{' '}
            over {analysis.count} {analysis.count === 1 ? 'exchange' : 'exchanges'}.
          </>
        )}
      </p>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>sender</th>
              <th>time</th>
              <th>message</th>
              <th>counted</th>
              <th aria-label="Remove" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isReply = REPLY_SENDERS.has(row.sender.trim());
              const known = ['user', 'agent', 'bot'].includes(row.sender.trim());
              return (
                <tr key={i}>
                  <td>
                    <input
                      type="text"
                      className={`${styles.input} ${!known ? styles.warnInput : ''}`}
                      value={row.sender}
                      aria-label={`sender, row ${i + 1}`}
                      onChange={(e) => update(i, 'sender', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className={styles.input}
                      value={row.time}
                      aria-label={`time, row ${i + 1}`}
                      onChange={(e) => update(i, 'time', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className={styles.msgInput}
                      value={row.message}
                      aria-label={`message, row ${i + 1}`}
                      onChange={(e) => update(i, 'message', e.target.value)}
                    />
                  </td>
                  <td className={styles.center}>
                    {analysis.counted.has(i) ? 'yes' : row.sender.trim() === 'user' || isReply ? '' : 'no'}
                  </td>
                  <td className={styles.center}>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      aria-label={`Remove row ${i + 1}`}
                      disabled={rows.length === 1}
                      onClick={() => removeRow(i)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.actionBtn} onClick={addRow}>
          Add message
        </button>
        <button type="button" className={styles.actionBtn} onClick={reset}>
          Reset to the example
        </button>
      </div>

      <p className={styles.footnote}>
        Try changing a sender from <code>agent</code> to <code>Agent</code>.
        The message still shows in the transcript, but Vela stops counting
        that reply, so the exchange drops out of the average with no error.
        A real upload sends the full <code>DD/MM/YYYY, HH:mm:ss</code> in the
        time field.
      </p>
    </div>
  );
}

import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

/**
 * Interactive companion to how-scoring-works.md.
 *
 * It runs the exact model that page describes:
 *   - a question answered N/A drops out of every total
 *   - a question earns its weight only when the answer matches Expected Outcome
 *   - a failed question marked Auto-Fail takes its whole score to 0.0%,
 *     with the earned figure kept in brackets
 *   - Compliance Score and Quality Score are the same calculation run over
 *     the two halves of the one scorecard, each with its own Auto-Fail
 *
 * Nothing here talks to Vela. It is arithmetic on the numbers you type.
 */

const EXAMPLE = [
  { question: "Verified the customer's identity", weight: 3, expected: 'Yes', answer: 'Yes', compliance: false, autoFail: false },
  { question: 'Explained the fee', weight: 2, expected: 'Yes', answer: 'No', compliance: false, autoFail: false },
  { question: 'Offered the callback option', weight: 3, expected: 'Yes', answer: 'Yes', compliance: false, autoFail: false },
  { question: 'Handled the transfer correctly', weight: 2, expected: 'Yes', answer: 'N/A', compliance: false, autoFail: false },
];

const withIds = (rows) => rows.map((r, i) => ({ id: `${Date.now()}-${i}`, ...r }));

function scoreSet(questions) {
  const applicable = questions.filter((q) => q.answer !== 'N/A');
  const total = applicable.reduce((sum, q) => sum + Number(q.weight), 0);
  if (applicable.length === 0 || total === 0) {
    return { hasScore: false, applicableCount: applicable.length };
  }
  const earned = applicable.reduce(
    (sum, q) => (q.answer === q.expected ? sum + Number(q.weight) : sum),
    0,
  );
  const autoFailed = applicable.some((q) => q.answer !== q.expected && q.autoFail);
  return {
    hasScore: true,
    earned,
    total,
    raw: (earned / total) * 100,
    autoFailed,
    applicableCount: applicable.length,
  };
}

function ScoreCard({ label, result, hint }) {
  let body;
  if (!result.hasScore) {
    body = (
      <>
        <span className={styles.scoreValueMuted}>No score</span>
        <span className={styles.scoreNote}>{hint}</span>
      </>
    );
  } else if (result.autoFailed) {
    body = (
      <>
        <span className={styles.scoreValue}>0.0%</span>
        <span className={styles.scoreNote}>
          auto-failed. Earned {result.raw.toFixed(1)}% on the rest
        </span>
      </>
    );
  } else {
    body = (
      <>
        <span className={styles.scoreValue}>{result.raw.toFixed(1)}%</span>
        <span className={styles.scoreNote}>
          {result.earned} of {result.total} applicable weight
        </span>
      </>
    );
  }

  return (
    <div className={styles.scoreCard}>
      <span className={styles.scoreLabel}>{label}</span>
      {body}
    </div>
  );
}

export default function ScorecardCalculator() {
  const [questions, setQuestions] = useState(() => withIds(EXAMPLE));

  const overall = useMemo(() => scoreSet(questions), [questions]);
  const compliance = useMemo(
    () => scoreSet(questions.filter((q) => q.compliance)),
    [questions],
  );
  const quality = useMemo(
    () => scoreSet(questions.filter((q) => !q.compliance)),
    [questions],
  );

  const naCount = questions.filter((q) => q.answer === 'N/A').length;

  const update = (id, field, value) =>
    setQuestions((rows) =>
      rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const remove = (id) =>
    setQuestions((rows) => rows.filter((r) => r.id !== id));

  const add = () =>
    setQuestions((rows) => [
      ...rows,
      {
        id: `${Date.now()}-${rows.length}`,
        question: `Question ${rows.length + 1}`,
        weight: 1,
        expected: 'Yes',
        answer: 'Yes',
        compliance: false,
        autoFail: false,
      },
    ]);

  const reset = () => setQuestions(withIds(EXAMPLE));

  return (
    <div className={styles.wrapper}>
      <div className={styles.scoreRow}>
        <ScoreCard
          label="Agent Score"
          result={overall}
          hint="Add a question that is not marked N/A"
        />
        <ScoreCard
          label="Quality Score"
          result={quality}
          hint="No non-compliance questions apply"
        />
        <ScoreCard
          label="Compliance Score"
          result={compliance}
          hint="No question is marked Compliance"
        />
      </div>

      {overall.hasScore && (
        <p className={styles.working}>
          {overall.earned} of {overall.total} applicable weight earned across{' '}
          {overall.applicableCount}{' '}
          {overall.applicableCount === 1 ? 'question' : 'questions'}.
          {naCount > 0 && (
            <>
              {' '}
              {naCount} {naCount === 1 ? 'question' : 'questions'} marked N/A and
              left out of every total.
            </>
          )}
        </p>
      )}

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.qCol}>Question</th>
              <th>Weight</th>
              <th>Expected Outcome</th>
              <th>Answer</th>
              <th>Compliance</th>
              <th>Auto-Fail</th>
              <th aria-label="Remove" />
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id}>
                <td className={styles.qCol}>
                  <input
                    type="text"
                    className={styles.textInput}
                    value={q.question}
                    aria-label="Question text"
                    onChange={(e) => update(q.id, 'question', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    className={styles.select}
                    value={q.weight}
                    aria-label="Weight"
                    onChange={(e) =>
                      update(q.id, 'weight', Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    className={styles.select}
                    value={q.expected}
                    aria-label="Expected Outcome"
                    onChange={(e) => update(q.id, 'expected', e.target.value)}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td>
                  <select
                    className={styles.select}
                    value={q.answer}
                    aria-label="Answer"
                    onChange={(e) => update(q.id, 'answer', e.target.value)}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="N/A">N/A</option>
                  </select>
                </td>
                <td className={styles.checkCell}>
                  <input
                    type="checkbox"
                    checked={q.compliance}
                    aria-label="Compliance question"
                    onChange={(e) =>
                      update(q.id, 'compliance', e.target.checked)
                    }
                  />
                </td>
                <td className={styles.checkCell}>
                  <input
                    type="checkbox"
                    checked={q.autoFail}
                    aria-label="Auto-Fail"
                    onChange={(e) => update(q.id, 'autoFail', e.target.checked)}
                  />
                </td>
                <td className={styles.checkCell}>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    aria-label="Remove this question"
                    disabled={questions.length === 1}
                    onClick={() => remove(q.id)}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.actionBtn} onClick={add}>
          Add question
        </button>
        <button type="button" className={styles.actionBtn} onClick={reset}>
          Reset to the example
        </button>
      </div>

      <p className={styles.footnote}>
        This runs the calculation described on this page. For a real
        interaction, the figures in the Call Details panel are the ones that
        count.
      </p>
    </div>
  );
}

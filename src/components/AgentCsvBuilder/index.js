import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

/**
 * Builds a valid agent-import CSV from a small form, so an administrator
 * can fill in names rather than format a spreadsheet by hand.
 *
 * The column set is the one Vela's upload expects: name, email, department,
 * team. Nothing here is uploaded. It produces text to copy into the CSV.
 */

const BLANK = { name: '', email: '', department: '', team: '' };

const csvCell = (value) => {
  const v = String(value ?? '');
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
};

export default function AgentCsvBuilder() {
  const [rows, setRows] = useState(() => [
    { ...BLANK, name: 'John Smith', email: 'john.smith@company.com', department: 'Customer Service', team: 'Support Team' },
    { ...BLANK, name: 'Mary Johnson', email: 'mary.johnson@company.com', department: 'Sales', team: 'Sales Team' },
  ]);
  const [copied, setCopied] = useState(false);

  const update = (i, field, value) => {
    setRows((r) => r.map((row, j) => (j === i ? { ...row, [field]: value } : row)));
    setCopied(false);
  };
  const addRow = () => {
    setRows((r) => [...r, { ...BLANK }]);
    setCopied(false);
  };
  const removeRow = (i) => {
    setRows((r) => r.filter((_, j) => j !== i));
    setCopied(false);
  };

  const csv = useMemo(() => {
    const header = 'name,email,department,team';
    const body = rows
      .filter((r) => r.name || r.email || r.department || r.team)
      .map((r) => [r.name, r.email, r.department, r.team].map(csvCell).join(','));
    return [header, ...body].join('\n');
  }, [rows]);

  const warnings = useMemo(() => {
    const out = [];
    const seen = new Map();
    rows.forEach((r, i) => {
      const any = r.name || r.email || r.department || r.team;
      if (!any) return;
      const missing = ['name', 'email', 'department', 'team'].filter((f) => !r[f].trim());
      if (missing.length) out.push(`Row ${i + 1}: ${missing.join(', ')} still empty.`);
      if (r.email.trim() && !r.email.includes('@'))
        out.push(`Row ${i + 1}: that email address has no "@".`);
      const key = r.email.trim().toLowerCase();
      if (key) {
        if (seen.has(key)) out.push(`Row ${i + 1}: the same email is on row ${seen.get(key) + 1}.`);
        else seen.set(key, i);
      }
    });
    return out;
  }, [rows]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(csv);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>department</th>
              <th>team</th>
              <th aria-label="Remove" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {['name', 'email', 'department', 'team'].map((field) => (
                  <td key={field}>
                    <input
                      type="text"
                      className={styles.input}
                      value={row[field]}
                      aria-label={`${field}, row ${i + 1}`}
                      onChange={(e) => update(i, field, e.target.value)}
                    />
                  </td>
                ))}
                <td className={styles.removeCell}>
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
            ))}
          </tbody>
        </table>
      </div>

      <button type="button" className={styles.addBtn} onClick={addRow}>
        Add row
      </button>

      {warnings.length > 0 && (
        <ul className={styles.warnings}>
          {warnings.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      )}

      <div className={styles.outputHead}>
        <span>CSV</span>
        <button type="button" className={styles.copyBtn} onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className={styles.output}>{csv}</pre>

      <p className={styles.footnote}>
        Department and team names have to match ones that already exist in
        Vela, unless you pick the create option during the upload. Matching
        ignores case.
      </p>
    </div>
  );
}

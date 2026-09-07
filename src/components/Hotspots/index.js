import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * An annotated screenshot. Numbered pins sit on top of the image at the
 * coordinates you give, and each one expands a short explanation below.
 *
 * Usage, from an .md page:
 *
 *   import Hotspots from '@site/src/components/Hotspots';
 *   import shot from '@site/img/screenshots/.../thing.png';
 *
 *   <Hotspots
 *     src={shot}
 *     alt="Plain-language description of the whole screen, for screen readers"
 *     points={[
 *       { x: 12, y: 34, title: 'Agent Score', body: 'What this figure means.' },
 *     ]}
 *   />
 *
 * x and y are percentages of the image, measured from the top-left corner.
 * The pin is centred on that point. Keep both between about 3 and 97 so the
 * pin does not sit half off the edge. Put the pin in the blank space beside
 * what it names rather than on top of it, so the label it points at stays
 * readable underneath.
 *
 * The list below the image is the real interface: it works without the
 * picture, on a phone, and with a keyboard. The pins are an overlay on top
 * of that.
 */
export default function Hotspots({ src, alt, points = [] }) {
  const [active, setActive] = useState(null);

  const imgSrc =
    typeof src === 'string' ? src : src?.src ?? src?.default ?? '';

  const toggle = (i) => setActive((cur) => (cur === i ? null : i));

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <img src={imgSrc} alt={alt} className={styles.image} />
        {points.map((p, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.pin} ${active === i ? styles.pinActive : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`${i + 1}. ${p.title}`}
            aria-expanded={active === i}
            onClick={() => toggle(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <ol className={styles.list}>
        {points.map((p, i) => (
          <li
            key={i}
            className={`${styles.item} ${active === i ? styles.itemActive : ''}`}
          >
            <button
              type="button"
              className={styles.itemButton}
              aria-expanded={active === i}
              onClick={() => toggle(i)}
            >
              <span className={styles.itemNum}>{i + 1}</span>
              <span className={styles.itemTitle}>{p.title}</span>
            </button>
            {active === i && <p className={styles.itemBody}>{p.body}</p>}
          </li>
        ))}
      </ol>
    </figure>
  );
}

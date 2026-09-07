import React, { useId, useRef, useState } from 'react';
import styles from './styles.module.css';

/**
 * An annotated screenshot. Numbered pins sit on top of the image at the
 * coordinates you give, and the list below carries every explanation.
 *
 * The two halves navigate to each other. Selecting a pin scrolls to its
 * entry in the list and puts the keyboard on it; selecting an entry scrolls
 * back to its pin on the image. Either way the pair is highlighted, so on a
 * long list you can tell what you just came from.
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
 * picture, on a phone, and with a keyboard, and its text is always rendered,
 * so it is searchable and prints. The pins are an overlay on top
 * of that.
 */
export default function Hotspots({ src, alt, points = [] }) {
  const [active, setActive] = useState(null);
  const uid = useId();
  const pinRefs = useRef([]);
  const itemRefs = useRef([]);
  const rowRefs = useRef([]);

  const imgSrc =
    typeof src === 'string' ? src : src?.src ?? src?.default ?? '';

  const pinId = (i) => `${uid}-pin-${i}`;
  const itemId = (i) => `${uid}-item-${i}`;

  // Bring the counterpart into view and hand it the keyboard. Focusing is what
  // makes this work for someone tabbing through rather than pointing. The
  // element scrolled into view is not always the one focused: from a pin we
  // want the whole entry visible, explanation and all, not just its heading.
  const goTo = (scrollTo, focusOn) => {
    if (!scrollTo) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    scrollTo.scrollIntoView({
      block: 'nearest',
      behavior: reduced ? 'auto' : 'smooth',
    });
    focusOn?.focus({ preventScroll: true });
  };

  const fromPin = (i) => {
    setActive(i);
    goTo(rowRefs.current[i], itemRefs.current[i]);
  };

  const fromItem = (i) => {
    setActive(i);
    goTo(pinRefs.current[i], pinRefs.current[i]);
  };

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <img src={imgSrc} alt={alt} className={styles.image} />
        {points.map((p, i) => (
          <button
            key={i}
            type="button"
            id={pinId(i)}
            ref={(el) => {
              pinRefs.current[i] = el;
            }}
            className={`${styles.pin} ${active === i ? styles.pinActive : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`${i + 1}. ${p.title}. Go to the explanation`}
            aria-controls={itemId(i)}
            onClick={() => fromPin(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <ol className={styles.list}>
        {points.map((p, i) => (
          <li
            key={i}
            id={itemId(i)}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`${styles.item} ${active === i ? styles.itemActive : ''}`}
          >
            <button
              type="button"
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={styles.itemButton}
              aria-label={`${i + 1}. ${p.title}. Show on the screenshot`}
              aria-controls={pinId(i)}
              onClick={() => fromItem(i)}
            >
              <span className={styles.itemNum}>{i + 1}</span>
              <span className={styles.itemTitle}>{p.title}</span>
            </button>
            <p className={styles.itemBody}>{p.body}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

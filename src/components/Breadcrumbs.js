import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/theme-common/internal';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function Breadcrumbs() {
  const location = useLocation();
  const doc = useDoc();
  const breadcrumbs = useSidebarBreadcrumbs();

  // Don't show breadcrumbs on the homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label={translate({
      id: 'theme.docs.breadcrumbs.navAriaLabel',
      message: 'Breadcrumbs',
      description: 'The ARIA label for the breadcrumbs',
    })}>
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="/" className="breadcrumbs__link">
            <HomeIcon className="breadcrumbs__home-icon" />
            <span>Home</span>
          </a>
        </li>
        {breadcrumbs.map((item, idx) => (
          <li key={idx} className="breadcrumbs__item">
            {idx === breadcrumbs.length - 1 ? (
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="breadcrumbs__link">
                {item.label}
              </a>
            )}
          </li>
        ))}
        {doc && (
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">
              {doc.title}
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}

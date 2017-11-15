'use strict';

import { find, addAttrs, addClass } from 'domassist';

/**
 * Adds an anchor within HTML elements
 *
 * @param {string|Element|NodeList} selector Selector from which extract headings
 * @param {*} [anchorContent=null] Content to be inserted within the anchor
 *
 * @returns
 */
function tocAnchor(selector, anchorContent = null) {
  const headings = find(selector);

  headings.forEach((heading) => {
    const link = document.createElement('a');
    const anchor = heading.getAttribute('data-anchor-id') || heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');

    addAttrs(link, {
      href: `#${anchor}`,
      title: heading.textContent,
      innerHTML: anchorContent
    });

    link.setAttribute('aria-hidden', true);

    addClass(heading, 'toc-anchor-heading');
    addClass(link, 'toc-anchor-link');

    heading.appendChild(link);
  });

  return headings;
}

export default tocAnchor;
import { find, addAttrs, addClass } from 'domassist';

/**
 * Adds an anchor within HTML elements
 *
 * @param {string|Element|NodeList} selector Selector from which extract headings
 * @param {string|Element|NodeList} [anchorContent=null] Content to be inserted within the anchor
 *
 * @returns
 */
function TocAnchor(selector, anchorContent = null) {
  const headings = find(selector);

  headings.forEach((heading) => {
    const link = document.createElement('a');
    let anchorId = heading.getAttribute('data-anchor-id') || heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');

    /**
     * Avoid Id name clashing
     */
    find(`#${anchorId}`).forEach((repeatedId, index) => {
      if (repeatedId !== heading) {
        anchorId += `-${index + 1}`;
      }
    });

    heading.id = anchorId;

    addAttrs(link, {
      href: `#${anchorId}`,
      title: heading.textContent,
      innerHTML: anchorContent
    });

    link.setAttribute('aria-hidden', true);

    addClass(heading, 'toc-anchor-heading');
    addClass(link, 'toc-anchor-link');

    heading.insertBefore(link, heading.firstChild);
  });

  /**
   * Scrolls to anchor on page reload
   */
  setTimeout(() => {
    if (window.location.hash) {
      window.location = window.location.hash;
    }
  }, 0);

  return headings;
}

export default TocAnchor;

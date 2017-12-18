/*eslint new-cap: ["error", {capIsNewExceptions: ["TocAnchor"]}]*/

import test from 'tape-rollup';
import domassist from 'domassist';
import TocAnchor from '../index';
import { teardown } from './setup';

const setup = (total, properties) => {
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= total; i += 1) {
    const heading = document.createElement('h2');
    heading.id = `header-${i}`;
    heading.textContent = `Heading ${i}`;
    frag.appendChild(heading);
  }
  return frag;
};

test('tocAnchor - Returs an array of headings', assert => {
  const el = document.getElementById('toc-container').appendChild(setup(3));

  const headings = TocAnchor('#toc-container h2');

  assert.ok(Array.isArray(headings), true, 'Returned should be an array');

  teardown(el);
  assert.end();
});

test('tocAnchor - Generates anchors from string selector', assert => {
  const headersToCreate = 5;
  const el = document.getElementById('toc-container').appendChild(setup(headersToCreate));

  TocAnchor('#toc-container h2');

  const numberOfAnchors = domassist.find('.toc-anchor-link').length;

  assert.assert(numberOfAnchors, headersToCreate, 'Returned the generated anchors');

  teardown(el);
  assert.end();
});

test('tocAnchor - Generates anchors from Element', assert => {
  const headersToCreate = 3;
  const el = document.getElementById('toc-container');
  el.appendChild(setup(headersToCreate));

  const headings = domassist.find('#toc-container h2');

  TocAnchor(headings);

  const numberOfAnchors = domassist.find('.toc-anchor-link').length;

  assert.assert(numberOfAnchors, headersToCreate, 'Returned the generated anchors');

  teardown(el);
  assert.end();
});

test('tocAnchor - Creates an anchor with the right hash', assert => {
  const el = document.getElementById('toc-container').appendChild(setup(1));
  const headings = domassist.findOne('#header-1');

  TocAnchor(headings);

  const anchorHash = (domassist.findOne('.toc-anchor-link').href).split('#')[1];

  assert.equals(anchorHash, 'header-1', 'Anchor link matches element id');

  teardown(el);
  assert.end();
});

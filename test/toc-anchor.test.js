import test from 'tape-rollup';
import domassist from 'domassist';
import TocAnchor from '../index';
import { teardown } from './setup';

const setup = (total) => {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < total; i += 1) {
    const heading = document.createElement('h2');
    heading.textContent = `Heading ${1}`;
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

test('tocAnchor - Generates anchors', assert => {
  const headersToCreate = 5;
  const el = document.getElementById('toc-container').appendChild(setup(headersToCreate));

  TocAnchor('#toc-container h2');

  const numberOfAnchors = domassist.find('.toc-anchor-link').length;

  assert.assert(numberOfAnchors, headersToCreate, 'Returned the generated anchors');

  teardown(el);
  assert.end();
});

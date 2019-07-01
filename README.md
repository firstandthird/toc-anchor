# TOC-Anchor ![npm](https://img.shields.io/npm/v/toc-anchor.svg) [![Build Status](https://travis-ci.org/firstandthird/svg-injector.svg?branch=master)](https://travis-ci.org/firstandthird/toc-anchor)

Automatically adds anchors to elements.

## Installation

```sh
npm install toc-anchor
```

## Usage

In your project import the library:

```js
import TocAnchor from ‘toc-anchor’;
```

Import [default styles](styles.css).

### TocAnchor(selector, [anchorContent])

Initializes anchor library. Both the first and second argument can either be a selector, DOM node, or a collection of DOM Nodes.

#### Parameters

`selector` _{string|Element|NodeList}_ - Selector to which anchors will be added

`[anchorContent]` _{string|Element|NodeList}_ - Content to be included as anchor, if no provided a clip icon will be added by default

#### Returns

`Array` - Array containing the elements to which anchors where added

## Example

```js
const els = TocAnchor('.my-class h1', '<span class="anchor-icon"></span>');
```

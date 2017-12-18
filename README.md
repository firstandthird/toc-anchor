# TOC-Anchor
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

## License

### MIT License

Copyright (c) 2017 First+Third

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

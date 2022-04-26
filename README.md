# Repro for nested island bug

### Usage

Start the project:

```
deno task dev
```

# The error

The error is exercised by the `islands/Outer.tsx` component.

Apparently, when an Island returns another Island directly, instead of wrapped
in an element such as div, fresh breaks with this in the console:

```
main.js:1 Uncaught TypeError: Cannot read properties of undefined (reading 'nextSibling')
    at h (main.js:1:99)
    at n (main.js:1:659)
    at n (main.js:1:690)
    at n (main.js:1:717)
    at n (main.js:1:717)
    at S (main.js:1:722)
    at (index):4:1
```

In code:

```
import {a as c, b as a} from "./chunk-UCTKUVK6.js";
function h(e, n) {
    n = [].concat(n);
    let t = n[n.length - 1].nextSibling;
    function i(o, s) {
        e.insertBefore(o, s || t)
    }
    return e.__k = {
        nodeType: 1,
        parentNode: e,
        firstChild: n[0],
        childNodes: n,
        insertBefore: i,
        appendChild: i,
        removeChild: function(o) {
            e.removeChild(o)
        }
    }
}
```

# And a question :)

Is there a "debug friendly mode" in fresh?

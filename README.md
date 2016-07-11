
AArgs
=====

Author: Craig Russell <craig@craig-russell.co.uk>

Parse command line arguments into an object e.g.

```javascript
> node script.js -a -b Bzz --foo --bar=baz /path/to/file

{ '0': '/usr/bin/nodejs',
  '1': '/home/user/script.js',
  '2': '/path/to/file',
  a: true,
  b: 'Bzz',
  foo: true,
  bar: 'baz' }
```

Use it like

```javascript
var args = require('argparse');
console.log(args.bar || 'default')
```

AArgs
=====

Author: Craig Russell <craig@craig-russell.co.uk>

Parse command line arguments into an object e.g.

```javascript
> node /apth/to/script.js --foo --bar=baz /path/to/file

{ '0': '/usr/bin/nodejs',
  '1': '/var/www/nodejs/dummyapp/app.js',
  '2': '/path/to/file',
  foo: true,
  bar: 'baz' }
```

Use it like

```javascript
var args = require('argparse');
console.log(args.bar || 'default')
```
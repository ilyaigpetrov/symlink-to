## Symlink To NPM Project Root

```js
import Bar from 'symlink-to/project-root/foo/bar.js';
// OR
const Bar = require('symlink-to/project-root/foo/bar.js');

```

## Compatability

Type            | Linux                  | Windows                 | Bash on Windows
----------------|------------------------|-------------------------|------------------------
mklink /J       | Works as absolute link | Works as absolute link  | Works as absolute link
mklink /D       | no                     | yes                     | no
mklink /H       | -                      | Can't link to directory | -
Linux symlink   | yes                    | no                      | no
WinBash symlink | no                     | no                      | yes

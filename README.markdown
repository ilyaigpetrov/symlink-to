## Symlink To NPM Project Root

```js
import Bar from 'symlink-to/project-root/foo/bar';
// or
const Bar = require('symlink-to/project-root/foo/bar');

```

## Compatability

Symlinks generated on Windows won't be compatible with Linux and vice versa.
Only junctions created in Windows may be used in other OSes.
You will have to reinstall `symlink-to` package or invoke `npm run install`
inside it's folder.

If you know any other ways to quickly covert symlinks —, please, let me know.

### Compatability Table

Type            | Linux                  | Windows                 | WSL
----------------|------------------------|-------------------------|------------------------
mklink /J       | Works as absolute link | Works as absolute link  | Works as absolute link
mklink /D       | no                     | yes                     | no
mklink /H       | -                      | Can't link to directory | -
Linux symlink   | yes                    | no                      | no
WSL symlink     | no                     | no                      | yes

WSL is Windows Subsystem for Linux (bash for Windows).

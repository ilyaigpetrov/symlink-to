# DON'T USE

I plan to change module name to 'symlink-to-project-root'.
Don't use this module.

## Symlink To NPM Project Root

```js
import Bar from 'symlink-to/project-root/foo/bar';
// or
const Bar = require('symlink-to/project-root/foo/bar');

```

## I Don't Know

1. If you import the same module by different paths will webpack optimize it?
2. May NPM put this package to a folder different than `./node_modules/symlink-to` (for shared module optimization, e.g.)
and thus break symlinks to `./../..`?

## `node_modules` Compatability

Symlinks generated on Windows won't be compatible with Linux and vice versa.
Only junctions created in Windows are portable.
You will have to reinstall `symlink-to` package or invoke `npm run install`
inside its folder if you want to reuse node_modules on other OS.

If you know any other ways to quickly convert symlinks of node_modules recursively —, please, let me know.

### Compatability Table

Type                      | Linux                  | Windows                 | WSL
--------------------------|------------------------|-------------------------|------------------------
WSL symlink               | no                     | no                      | yes
mklink /J (junction)      | Works as absolute link | Works as absolute link  | Works as absolute link
mklink /D (dir, symbolic) | no                     | yes                     | no
mklink /H (hard)          | -                      | Can't link to directory | -
Linux symlink             | yes                    | no                      | no

WSL is Windows Subsystem for Linux (bash for Windows).

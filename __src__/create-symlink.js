'use strict';

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const linkPath = path.join('.', 'node_modules', '_project-soft');
const targetPath = '..';

fs.unlink(linkPath,
  () =>
    fs.symlink(targetPath, linkPath, 'dir', (err) => {

      if(!err) {
        return;
      }

      if (!process.platform.startsWith('win')) {
        throw err;
      }

      // Error on Windows
      child_process.exec(`mklink /D ${linkPath} ${targetPath}`, (err, stdout, stderr) => {

        if (!err) {
          return;
        }
        child_process.execSync(`mklink /J ${linkPath} ${targetPath}`);

      });

    })
);

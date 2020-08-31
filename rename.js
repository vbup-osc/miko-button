const fs = require('fs');
const path = require('path');

if (fs.existsSync(path.join(__dirname, './dist/sw.js'))) {
  fs.renameSync(path.join(__dirname, './dist/sw.js'), path.join(__dirname, './dist/service-worker.js'));
  console.log('rename success');
} else {
  console.log('no such file');
}
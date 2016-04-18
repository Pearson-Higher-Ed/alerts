const log = require('./log');
const path = require('path');
const fs = require('fs');
const bowerPath = path.join(process.cwd(), '/bower.json');

if (!fs.existsSync(bowerPath)) {
  log.secondary('Validated project.');
  process.exit(0);
}

log.primaryError('No Bower configuration or dependencies allowed.');
process.exit(1);

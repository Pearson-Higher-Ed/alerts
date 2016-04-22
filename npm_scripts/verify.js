const log = require('./log');
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');
const bowerPath = path.join(process.cwd(), '/bower.json');

if (pkg.name.indexOf('@pearson-components/') === -1) {
  log.primaryError('Package name must be pre-pended with "@pearson-components" scope.');
  process.exit(1);
}

if (!fs.existsSync(bowerPath)) {
  log.secondary('Validated project.');
  process.exit(0);
}

log.primaryError('No Bower configuration or dependencies allowed.');
process.exit(1);

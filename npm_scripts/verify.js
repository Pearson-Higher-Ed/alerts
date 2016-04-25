const log = require('./log');
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');
const bowerPath = path.join(process.cwd(), '/bower.json');

if (!pkg.name.startsWith('@pearson-components/')) {
  log.primaryError('Package name must be pre-pended with "@pearson-components/" scope.');
  process.exit(1);
}

if (!pkg.description) {
  log.primaryError('Package description must be provided.');
  process.exit(1);
}

if (!pkg.author) {
  log.primaryError('Package author must be provided.');
  process.exit(1);
}

if (!pkg.repository || !pkg.repository.url || pkg.repository.url === 'https://github.com/Pearson-Higher-Ed/') {
  log.primaryError('Package repository url must be provided with repo name.');
  process.exit(1);
}

if (fs.existsSync(bowerPath)) {
  log.primaryError('No Bower configuration or dependencies allowed.');
  process.exit(1);
}

log.primary('Verified project.');
process.exit(0);

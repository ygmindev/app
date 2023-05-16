require('../lib-shared/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
const lintConfig = require('../lib-config/src/node/lint/configs/lint.config');
module.exports = lintConfig.default ?? lintConfig;

require('../lib-shared/src/core/utils/nodeRegister/nodeRegister');
module.exports = require('../lib-config/src/webpack/webpack.backend.config').webpackConfig({
  globals: { __NAME__: 'SERVER_SANDBOX' },
});

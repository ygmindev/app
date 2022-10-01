require('../lib-shared/src/core/utils/nodeRegister/nodeRegister');
module.exports = require('../lib-config/src/webpack/webpack.serverless.config').webpackConfig({
  globals: { __NAME__: 'SERVER_LAMBDA' },
});

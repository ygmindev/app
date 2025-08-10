require('../lib-shared-js/src/core/utils/nodeRegister/nodeRegister').nodeRegister();

module.exports = require('@lib/config/node/webpack/webpack.native.config').webpackConfig({
  globals: { __NAME__: processenv.ENV_NAME },
});

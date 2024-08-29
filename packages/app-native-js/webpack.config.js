require('../lib-shared-js/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
const { ENV_NAME } = require('./src/app/app.constants');

module.exports = require('@lib/config/node/webpack/webpack.native.config').webpackConfig({
  globals: { __NAME__: ENV_NAME },
});

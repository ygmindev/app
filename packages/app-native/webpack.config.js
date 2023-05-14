require('../lib-shared/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
const { ENV_NAME } = require('./src/app/app.constants');

module.exports = require('@lib/config/webpack/webpack.native.config').webpackConfig({
  globals: { __NAME__: ENV_NAME },
});

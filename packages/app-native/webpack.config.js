require('../lib-shared/src/core/utils/nodeRegister/nodeRegister');
const { APP_NAME } = require('./src/app/app.constants');

module.exports = require('@lib/config/webpack/webpack.native.config').webpackConfig({
  globals: { __NAME__: APP_NAME },
});

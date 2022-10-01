require('../lib-shared/src/core/utils/nodeRegister/nodeRegister');
const { APP_NAME } = require('./src/app/app.constants');

module.exports = require('../lib-config/src/craco/craco.config').cracoConfig({
  globals: { __NAME__: APP_NAME },
});

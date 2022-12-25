require('../../../../../lib-shared/src/core/utils/nodeRegister/nodeRegister');
module.exports = require(`./cleanup.${process.env.APP_PLATFORM || 'base'}`);

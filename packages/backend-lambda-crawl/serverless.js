require('../lib-shared/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
const { requireInterop } = require('@lib/shared/core/utils/requireInterop/requireInterop');
module.exports = requireInterop('@lib/config/serverless/serverless.crawl').config();

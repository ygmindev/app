require('../lib-shared-js/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
const { requireInterop } = require('@lib/shared/core/utils/requireInterop/requireInterop');
const { stringify } = require('@lib/shared/core/utils/stringify/stringify');
module.exports = requireInterop('@lib/config/serverless/serverless.crawl').config();

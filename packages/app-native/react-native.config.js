require('../lib-shared/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
const { requireInterop } = require('@lib/shared/core/utils/requireInterop/requireInterop');
module.exports = requireInterop('@lib/config/react-native/react-native.config').config();

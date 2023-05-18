import { nodeRegister } from '../lib-shared/src/core/utils/nodeRegister/nodeRegister';
import _serverlessConfig from '../lib-config/src/platform/serverless/_serverless';

nodeRegister();

module.exports = _serverlessConfig();

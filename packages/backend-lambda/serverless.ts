import { nodeRegister } from '../lib-shared/src/core/utils/nodeRegister/nodeRegister';
import serverlessConfig from '../lib-config/src/framework/serverless/configs/serverless.config.node';

nodeRegister();

module.exports = serverlessConfig();

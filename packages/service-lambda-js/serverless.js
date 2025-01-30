import '../lib-shared-js/src/core/utils/nodeRegister/nodeRegister';

const { config } = await import('@lib/config/serverless/serverless.graphql');

export default config.config();

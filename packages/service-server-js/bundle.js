import '../lib-shared-js/src/core/utils/nodeRegister/nodeRegister';

const { config } = await import('@lib/config/node/bundle/bundle.node');

export default config.config();

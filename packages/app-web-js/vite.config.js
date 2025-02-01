import '../lib-shared-js/src/core/utils/nodeRegister/nodeRegister';

const { config } = await import('@lib/config/node/web/web');

export default config.config();

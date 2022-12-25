import { default as cleanupBase } from '@lib/config/node/test/configs/cleanup.base';
import { cleanup } from '@lib/frontend/setup/utils/cleanup/cleanup';

const _cleanup = async (): Promise<void> => {
  await cleanupBase();
  await cleanup();
};

export default _cleanup;
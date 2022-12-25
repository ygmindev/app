import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { default as cleanupBase } from '@lib/config/node/test/configs/cleanup.base';

const _cleanup = async (): Promise<void> => {
  await cleanupBase();
  await cleanup();
};

export default _cleanup;

import { default as cleanupBase } from '@lib/config/javascript/test/_cleanup.config.base';
import { cleanup } from '@lib/frontend/setup/utils/cleanup/cleanup';

const _cleanup = async (): Promise<void> => {
  await cleanupBase();
  await cleanup();
};

export default _cleanup;

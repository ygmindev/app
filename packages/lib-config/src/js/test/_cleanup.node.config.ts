import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { default as cleanupBase } from '@lib/config/js/test/_cleanup.base.config';

const _cleanup = async (): Promise<void> => {
  await cleanupBase();
  await cleanup();
};

export default _cleanup;

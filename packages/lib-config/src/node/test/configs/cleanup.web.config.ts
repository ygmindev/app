import { default as cleanupFrontend } from '@lib/config/node/test/configs/cleanup.frontend.config';

const _cleanup = async (): Promise<void> => {
  await cleanupFrontend();
};

export default _cleanup;

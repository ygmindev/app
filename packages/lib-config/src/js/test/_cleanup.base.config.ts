import { cleanup } from '@lib/shared/setup/utils/cleanup/cleanup';

const _cleanup = async (): Promise<void> => {
  await cleanup();
};

export default _cleanup;

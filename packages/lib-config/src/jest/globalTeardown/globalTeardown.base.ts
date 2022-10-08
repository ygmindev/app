import { cleanup } from '@lib/shared/setup/utils/cleanup/cleanup';

const globalTeardown = async (): Promise<void> => {
  await cleanup();
};

export default globalTeardown;

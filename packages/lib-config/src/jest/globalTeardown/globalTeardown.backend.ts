import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';

const globalTeardown = async (): Promise<void> => {
  await cleanup();
};

export default globalTeardown;

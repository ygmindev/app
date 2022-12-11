import { cleanup as cleanupBase } from '@lib/shared/setup/utils/cleanup/cleanup';

let isCleanedup = false;

export const cleanup = async (): Promise<void> => {
  await cleanupBase();

  if (!isCleanedup) {
    isCleanedup = true;
  }
};

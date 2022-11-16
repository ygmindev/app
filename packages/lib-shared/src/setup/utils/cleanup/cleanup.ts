import { info } from '@lib/shared/logging/utils/logger/logger';

let isCleanedup = false;

export const cleanup = async (): Promise<void> => {
  if (!isCleanedup) {
    info('cleaned up shared');

    isCleanedup = true;
  }
};

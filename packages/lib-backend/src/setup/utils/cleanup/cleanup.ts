import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { cleanup as cleanupBase } from '@lib/shared/setup/utils/cleanup/cleanup';

let isCleanedup = false;

export const cleanup = async (): Promise<void> => {
  await cleanupBase();

  if (!isCleanedup) {
    await Container.get(DatabaseMain).close();

    info('cleaned up backend');
    isCleanedup = true;
  }
};

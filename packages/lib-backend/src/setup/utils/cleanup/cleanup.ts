import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { cleanup as cleanupBase } from '@lib/shared/setup/utils/cleanup/cleanup';

let isCleanedup: boolean;

export const cleanup = async (): Promise<void> => {
  if (!isCleanedup) {
    await cleanupBase();

    await Container.get(DatabaseMain).close();

    isCleanedup = true;
  }
};

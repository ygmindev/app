import { DatabaseMongo } from '@lib/backend/database/utils/DatabaseMongo/DatabaseMongo';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { cleanup as cleanupBase } from '@lib/shared/setup/utils/cleanup/cleanup';

let isCleanedup = false;

export const cleanup: CallablePromiseModel = async () => {
  await cleanupBase();

  if (!isCleanedup) {
    await Container.get(DatabaseMongo).close();

    isCleanedup = true;
  }
};

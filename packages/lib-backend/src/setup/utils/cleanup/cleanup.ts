import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { cleanup as cleanupBase } from '@lib/shared/setup/utils/cleanup/cleanup';

let isCleanedup = false;

export const cleanup: CallablePromiseModel = async () => {
  await cleanupBase();

  if (!isCleanedup) {
    const { DatabaseMain } = await import('@lib/backend/database/utils/DatabaseMain/DatabaseMain');

    await Container.get(DatabaseMain).close();

    isCleanedup = true;
  }
};

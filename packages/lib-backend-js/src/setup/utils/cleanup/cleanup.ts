import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type CleanupModel } from '@lib/backend/setup/utils/cleanup/cleanup.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

export const cleanup = async (): Promise<CleanupModel> => {
  await Container.get(Database, DATABASE_TYPE.MONGO).close();

  Container.get(PubSub).close();
};

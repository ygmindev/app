import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type CleanupModel } from '@lib/backend/setup/utils/cleanup/cleanup.models';

export const cleanup = async (): Promise<CleanupModel> => {
  const database = Container.get(Database, DATABASE_TYPE.MONGO);
  await database.close();
};

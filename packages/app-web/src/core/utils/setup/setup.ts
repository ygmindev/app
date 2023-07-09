import { type SetupModel } from '#app-web/core/utils/setup/setup.models';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { _config as _configDatabase } from '#lib-config/database/database.mongo';

export const setup = async (): SetupModel => {
  const database = new Database(_configDatabase());
  await database.connect();
  Container.set(Database, database, DATABASE_TYPE.MONGO);
  return {
    database,
    onTerminate: async () => {
      await database.close();
    },
  };
};

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type DatabasePluginModel } from '@lib/backend/server/utils/Server/plugins/databasePlugin/databasePlugin.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const databasePlugin: DatabasePluginModel = async (server, { config }) => {
  const onInitialize = server._onInitialize;
  const onClose = server._onClose;

  server._onInitialize = async () => {
    try {
      const databaseF = new Database(config);
      await databaseF.connect();
      Container.set(Database, databaseF, DATABASE_TYPE.MONGO);
    } catch (e) {
      logger.warn(`failed to connect to ${config.host} with error: ${e as Error}`);
    }
    await onInitialize?.();
  };

  server._onClose = async () => {
    await Container.get(Database, DATABASE_TYPE.MONGO).close();
    await onClose?.();
  };
};

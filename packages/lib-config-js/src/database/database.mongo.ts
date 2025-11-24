import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { databaseConfig as configBase } from '@lib/config/database/database.base';
import { Container } from '@lib/shared/core/utils/Container/Container';

let databaseConfig = configBase;

databaseConfig = databaseConfig.extend(() => {
  const environment = Container.get(Environment);
  return {
    database: environment.variables.SERVER_DB_MONGO_NAME,

    host: environment.variables.SERVER_DB_MONGO_URL,

    password: environment.variables.SERVER_DB_MONGO_PASSWORD,

    type: DATABASE_TYPE.MONGO,

    username: environment.variables.SERVER_DB_MONGO_USERNAME,
  };
});

export { databaseConfig };

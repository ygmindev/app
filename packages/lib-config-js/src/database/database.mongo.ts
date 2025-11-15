import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import configBase from '@lib/config/database/database.base';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const config = defineConfig<DatabaseConfigModel, _DatabaseConfigModel>({
  ...configBase,

  overrides: () => {
    const environment = Container.get(Environment);
    return [
      {
        database: environment.variables.SERVER_DB_MONGO_NAME,

        host: environment.variables.SERVER_DB_MONGO_URL,

        password: environment.variables.SERVER_DB_MONGO_PASSWORD,

        type: DATABASE_TYPE.MONGO,

        username: environment.variables.SERVER_DB_MONGO_USERNAME,
      },
    ];
  },
});

export default config;

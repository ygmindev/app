import { databaseConfig as configBase } from '@lib/config/database/database.mongo';

let databaseConfig = configBase;

databaseConfig = databaseConfig.extend(() => ({
  entities: [],
}));

export { databaseConfig };

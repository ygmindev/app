import { databaseConfig as configBase } from '@lib/config/database/database.mongo';

export const databaseConfig = configBase.extend(() => ({
  entities: [],
}));

import { databaseConfig as configBase } from '@lib/config/database/database.admin';

export const databaseConfig = configBase.extend(() => ({
  entities: [],
}));

import { databaseConfig as configBase } from '@lib/config/database/database.base';

export const databaseConfig = configBase.extend(() => ({
  entities: [],
}));

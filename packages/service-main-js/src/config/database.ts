import { databaseConfig as configBase } from '@lib/config/database/database.main';

export const databaseConfig = configBase.extend(() => ({
  entities: [],
}));

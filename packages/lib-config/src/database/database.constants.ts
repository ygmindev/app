import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export const DATABASE_CONFIG: Pick<DatabaseConfigModel, 'expireSeconds' | 'pool'> = {
  expireSeconds: 60 * 5, // 5 minutes

  pool: { max: 10 },
};

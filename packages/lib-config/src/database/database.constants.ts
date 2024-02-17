import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export const DATABASE_CONFIG = {
  expireSeconds: 60 * 5, // 5 minutes

  pool: { max: 10 },
} satisfies Pick<DatabaseConfigModel, 'expireSeconds' | 'pool'>;

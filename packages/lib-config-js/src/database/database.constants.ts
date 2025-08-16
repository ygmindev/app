import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export const DATABASE_CONFIG: Pick<
  DatabaseConfigModel,
  'expireSeconds' | 'pool' | 'resourcePostfix'
> = {
  // 5 minutes
  expireSeconds: 60 * 5,

  pool: { max: 10 },

  resourcePostfix: '.entity.ts',
};

import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Otp } from '@lib/backend/auth/resources/Otp/Otp';
import { DummyEntityResource } from '@lib/backend/test/resources/DummyEntityResource/DummyEntityResource';
import { User } from '@lib/backend/user/resources/User/User';
import { DATABASE_TYPE } from '@lib/config/database/database.constants';
import type { DatabaseConfigParamsModel } from '@lib/config/database/database.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const databaseConfig: DatabaseConfigParamsModel = {
  database: getEnv('MONGO_DATABASE_NAME'),
  entities: [
    Access,
    Otp,
    User,
    process.env.NODE_ENV !== 'production' && DummyEntityResource,
  ].filter(Boolean) as Array<ConstructorModel<EntityResourceModel>>,
  host: getEnv('MONGO_DATABASE_URL'),
  password: getEnv('MONGO_DATABASE_PASSWORD', null) || undefined,
  pool: { max: 10 },
  type: DATABASE_TYPE.MONGO,
  username: getEnv('MONGO_DATABASE_USERNAME', null) || undefined,
};

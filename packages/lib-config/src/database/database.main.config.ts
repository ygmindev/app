import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Otp } from '@lib/backend/auth/resources/Otp/Otp';
import { DATABASE_TYPE } from '@lib/backend/database/utils/Database/Database.constants';
import type { DatabaseParamsModel } from '@lib/backend/database/utils/Database/Database.models';
import { DummyEntityResource } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResource';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const databaseMainParams = (): DatabaseParamsModel => ({
  database: getEnv('SERVER_DATABASE_NAME'),
  entities: [Access, Otp, process.env.NODE_ENV !== 'production' && DummyEntityResource].filter(
    Boolean,
  ) as Array<ConstructorModel<EntityResourceModel>>,
  host: getEnv('SERVER_DATABASE_URL'),
  password: getEnv('SERVER_DATABASE_PASSWORD', null) || undefined,
  type: DATABASE_TYPE.MONGO,
  username: getEnv('SERVER_DATABASE_USERNAME', null) || undefined,
});

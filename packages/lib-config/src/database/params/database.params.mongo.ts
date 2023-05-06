import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Otp } from '@lib/backend/auth/resources/Otp/Otp';
import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { Card } from '@lib/backend/billing/resources/Card/Card';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { DummyEntityResource } from '@lib/backend/test/resources/DummyEntityResource/DummyEntityResource';
import { User } from '@lib/backend/user/resources/User/User';
import type { _DatabaseConfigParamsModel } from '@lib/config/database/_database.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const databaseConfigParamsMongo: _DatabaseConfigParamsModel = {
  database: process.env.SERVER_MONGO_DATABASE_NAME,

  entities: [
    Access,
    Bank,
    Card,
    Otp,
    User,
    process.env.NODE_ENV !== 'production' && DummyEntityResource,
  ].filter(Boolean) as Array<ConstructorModel<EntityResourceModel>>,

  host: process.env.SERVER_MONGO_DATABASE_URL,

  password: process.env.SERVER_MONGO_DATABASE_PASSWORD,

  pool: { max: 10 },

  type: DATABASE_TYPE.MONGO,

  username: process.env.SERVER_MONGO_DATABASE_USERNAME,
};

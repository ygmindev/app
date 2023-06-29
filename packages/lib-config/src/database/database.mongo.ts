import { Access } from '#lib-backend/auth/resources/Access/Access';
import { Otp } from '#lib-backend/auth/resources/Otp/Otp';
import { Bank } from '#lib-backend/billing/resources/Bank/Bank';
import { Card } from '#lib-backend/billing/resources/Card/Card';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { DummyEntityResource } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResource';
import { User } from '#lib-backend/user/resources/User/User';
import { _database } from '#lib-config/database/_database';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '#lib-config/database/database.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const config: DatabaseConfigModel = () => ({
  database: process.env.DATABASE_MONGO_NAME,

  entities: filterNil([
    Access,
    Bank,
    Card,
    Otp,
    User,
    process.env.NODE_ENV !== 'production' && DummyEntityResource,
  ]),

  host: process.env.DATABASE_MONGO_URL,

  password: process.env.DATABASE_MONGO_PASSWORD,

  pool: { max: 10 },

  type: DATABASE_TYPE.MONGO,

  username: process.env.DATABASE_MONGO_USERNAME,
});

export const _config: _DatabaseConfigModel = () => _database(config());

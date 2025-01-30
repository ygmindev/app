import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { Vendor } from '@lib/backend/admin/resources/Vendor/Vendor';
import { Access } from '@lib/backend/auth/resources/Access/Access';
import { Otp } from '@lib/backend/auth/resources/Otp/Otp';
import { Role } from '@lib/backend/auth/resources/Role/Role';
import { Bank } from '@lib/backend/billing/resources/Bank/Bank';
import { Card } from '@lib/backend/billing/resources/Card/Card';
import { PaymentMethod } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethod';
import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { Order } from '@lib/backend/commerce/resources/Order/Order';
import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { Group } from '@lib/backend/group/resources/Group/Group';
import { Socket } from '@lib/backend/http/resources/Socket/Socket';
import { TestableEntityResource } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResource';
import { LinkedUser } from '@lib/backend/user/resources/LinkedUser/LinkedUser';
import { User } from '@lib/backend/user/resources/User/User';
import { _database } from '@lib/config/database/_database';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<DatabaseConfigModel, _DatabaseConfigModel>({
  config: _database,

  params: () => ({
    ...DATABASE_CONFIG,

    entities: filterNil([
      Access,
      Bank,
      Card,
      Chat,
      LinkedUser,
      Group,
      Order,
      Otp,
      PaymentMethod,
      Product,
      Role,
      Socket,
      User,
      Utility,
      Vendor,
      process.env.NODE_ENV !== 'production' && TestableEntityResource,
    ]),
  }),
});

export default config;

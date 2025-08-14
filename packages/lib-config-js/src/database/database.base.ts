import { _database } from '@lib/config/database/_database';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Utility } from '@lib/model/admin/Utility/Utility';
import { Vendor } from '@lib/model/admin/Vendor/Vendor';
import { Access } from '@lib/model/auth/Access/Access';
import { Otp } from '@lib/model/auth/Otp/Otp';
import { Role } from '@lib/model/auth/Role/Role';
import { Bank } from '@lib/model/billing/Bank/Bank';
import { Card } from '@lib/model/billing/Card/Card';
import { PaymentMethod } from '@lib/model/billing/PaymentMethod/PaymentMethod';
import { Chat } from '@lib/model/chat/Chat/Chat';
import { Message } from '@lib/model/chat/Message/Message';
import { Order } from '@lib/model/commerce/Order/Order';
import { Product } from '@lib/model/commerce/Product/Product';
import { Group } from '@lib/model/group/Group/Group';
import { Socket } from '@lib/model/http/Socket/Socket';
import { Curve } from '@lib/model/quant/Curve/Curve';
import { Quote } from '@lib/model/quant/Quote/Quote';
import { Rate } from '@lib/model/quant/Rate/Rate';
import { Security } from '@lib/model/quant/Security/Security';
import { Snapshot } from '@lib/model/test/Snapshot/Snapshot';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser';
import { User } from '@lib/model/user/User/User';
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
      Curve,
      Group,
      LinkedUser,
      Message,
      Order,
      Otp,
      PaymentMethod,
      Product,
      Quote,
      Rate,
      Role,
      Security,
      Socket,
      User,
      Utility,
      Vendor,
      ...(process.env.NODE_ENV !== 'production'
        ? [Snapshot, TestableEntityResource, TestableEmbeddedResource, TestableRelatedResource]
        : []),
    ]),
  }),
});

export default config;

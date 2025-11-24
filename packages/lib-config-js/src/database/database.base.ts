import { _database } from '@lib/config/database/_database';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Utility } from '@lib/model/admin/Utility/Utility.entity';
import { Vendor } from '@lib/model/admin/Vendor/Vendor.entity';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { Otp } from '@lib/model/auth/Otp/Otp.entity';
import { Role } from '@lib/model/auth/Role/Role.entity';
import { Bank } from '@lib/model/billing/Bank/Bank.entity';
import { Card } from '@lib/model/billing/Card/Card.entity';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { Message } from '@lib/model/chat/Message/Message.entity';
import { Order } from '@lib/model/commerce/Order/Order.entity';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing.entity';
import { Product } from '@lib/model/commerce/Product/Product.entity';
import { Group } from '@lib/model/group/Group/Group.entity';
import { Socket } from '@lib/model/http/Socket/Socket.entity';
import { Curve } from '@lib/model/quant/Curve/Curve.entity';
import { Quote } from '@lib/model/quant/Quote/Quote';
import { Rate } from '@lib/model/quant/Rate/Rate';
import { Snapshot } from '@lib/model/test/Snapshot/Snapshot.entity';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.entity';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource.entity';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.entity';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser.entity';
import { User } from '@lib/model/user/User/User.entity';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const databaseConfig = new Config<DatabaseConfigModel, _DatabaseConfigModel>({
  config: _database,

  params: () => {
    return {
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
        Product,
        Pricing,
        Quote,
        Rate,
        Role,
        Socket,
        User,
        Utility,
        Vendor,
        ...(process.env.NODE_ENV !== 'production'
          ? [Snapshot, TestableEntityResource, TestableEmbeddedResource, TestableRelatedResource]
          : []),
      ]),
    };
  },
});

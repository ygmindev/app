import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { _database } from '@lib/config/database/_database';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { Otp } from '@lib/model/auth/Otp/Otp.entity';
import { Role } from '@lib/model/auth/Role/Role.entity';
import { Bank } from '@lib/model/billing/Bank/Bank.entity';
import { Card } from '@lib/model/billing/Card/Card.entity';
import { Message } from '@lib/model/chat/Message/Message.entity';
import { Order } from '@lib/model/commerce/Order/Order.entity';
import { Pricing } from '@lib/model/commerce/Pricing/Pricing.entity';
import { Product } from '@lib/model/commerce/Product/Product.entity';
import { Group } from '@lib/model/group/Group/Group.entity';
import { Socket } from '@lib/model/http/Socket/Socket.entity';
import { LinkedUser } from '@lib/model/user/LinkedUser/LinkedUser.entity';
import { User } from '@lib/model/user/User/User.entity';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const databaseConfig = new Config<DatabaseConfigModel, _DatabaseConfigModel>({
  config: _database,

  params: () => {
    const environment = Container.get(Environment);

    return {
      ...DATABASE_CONFIG,
      database: environment.variables.SERVER_DB_MONGO_NAME,

      entities: filterNil([
        Access,
        Bank,
        Card,
        // Chat,
        // Curve,
        Group,
        LinkedUser,
        Message,
        Order,
        Otp,
        Product,
        Pricing,
        // Quote,
        // Rate,
        Role,
        Socket,
        User,
      ]),

      host: environment.variables.SERVER_DB_MONGO_URL,

      password: environment.variables.SERVER_DB_MONGO_PASSWORD,

      type: DATABASE_TYPE.MONGO,

      username: environment.variables.SERVER_DB_MONGO_USERNAME,
    };
  },
});

import { Utility } from '@lib-backend/admin/resources/Utility/Utility';
import { Vendor } from '@lib-backend/admin/resources/Vendor/Vendor';
import { Access } from '@lib-backend/auth/resources/Access/Access';
import { Otp } from '@lib-backend/auth/resources/Otp/Otp';
import { Bank } from '@lib-backend/billing/resources/Bank/Bank';
import { Card } from '@lib-backend/billing/resources/Card/Card';
import { Chat } from '@lib-backend/chat/resources/Chat/Chat';
import { Group } from '@lib-backend/group/resources/Group/Group';
import { Socket } from '@lib-backend/http/resources/Socket/Socket';
import { TestableEntityResource } from '@lib-backend/test/resources/TestableEntityResource/TestableEntityResource';
import { LinkedUser } from '@lib-backend/user/resources/LinkedUser/LinkedUser';
import { User } from '@lib-backend/user/resources/User/User';
import { defineConfig } from '@lib-config/core/utils/defineConfig/defineConfig';
import { _database } from '@lib-config/database/_database';
import { filterNil } from '@lib-shared/core/utils/filterNil/filterNil';

const { _config, config } = defineConfig({
  _config: _database,

  config: () => ({
    entities: filterNil([
      Access,
      Bank,
      Card,
      Chat,
      LinkedUser,
      Group,
      Otp,
      Socket,
      User,
      Utility,
      Vendor,
      process.env.NODE_ENV !== 'production' && TestableEntityResource,
    ]),

    pool: { max: 10 },
  }),
});

export { _config, config };

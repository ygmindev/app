import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { config as configBase } from '@lib/config/graphql/graphql.base';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { AccessResolver } from '@lib/model/auth/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/model/auth/Otp/OtpResolver/OtpResolver';
import { RoleResolver } from '@lib/model/auth/Role/RoleResolver/RoleResolver';
import { SignInResolver } from '@lib/model/auth/SignIn/SignInResolver/SignInResolver';
import { GroupResolver } from '@lib/model/group/Group/GroupResolver/GroupResolver';
import { SocketResolver } from '@lib/model/http/Socket/SocketResolver/SocketResolver';
import { SnapshotResolver } from '@lib/model/test/Snapshot/SnapshotResolver/SnapshotResolver';
import { UserResolver } from '@lib/model/user/User/UserResolver/UserResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  ...configBase,

  overrides: () => [
    {
      resolvers: filterNil([
        AccessResolver,
        GroupResolver,
        OtpResolver,
        RoleResolver,
        SignInResolver,
        SocketResolver,
        UserResolver,
        ...(process.env.NODE_ENV !== 'production' ? [SnapshotResolver] : []),
      ]),

      schemaDir: fromStatic('graphql/orchestrator.gql'),
    },
  ],
});

export default config;

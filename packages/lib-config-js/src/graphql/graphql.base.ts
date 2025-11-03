import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { _graphql } from '@lib/config/graphql/_graphql';
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
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  config: _graphql,

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
    },
  ],

  params: () =>
    ({
      authorize,

      container: Container,

      outDir: fromWorking(BUILD_DIR, GRAPHQL),
    }) as GraphqlConfigModel,
});

export default config;

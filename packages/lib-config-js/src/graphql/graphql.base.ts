import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { _graphql } from '@lib/config/graphql/_graphql';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { Config } from '@lib/config/utils/Config/Config';
import { AccessResolver } from '@lib/model/auth/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/model/auth/Otp/OtpResolver/OtpResolver';
import { RoleResolver } from '@lib/model/auth/Role/RoleResolver/RoleResolver';
import { SignInResolver } from '@lib/model/auth/SignIn/SignInResolver/SignInResolver';
import { GroupResolver } from '@lib/model/group/Group/GroupResolver/GroupResolver';
import { SocketResolver } from '@lib/model/http/Socket/SocketResolver/SocketResolver';
import { EventResolver } from '@lib/model/kfn/Event/EventResolver/EventResolver';
import { UserResolver } from '@lib/model/user/User/UserResolver/UserResolver';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const graphqlConfig = new Config<GraphqlConfigModel, _GraphqlConfigModel>({
  config: _graphql,

  params: () =>
    ({
      authorize,

      container: Container,

      outDirname: fromWorking(BUILD_DIR, GRAPHQL),

      resolvers: filterNil([
        AccessResolver,
        GroupResolver,
        EventResolver,
        OtpResolver,
        RoleResolver,
        SignInResolver,
        SocketResolver,
        UserResolver,
      ]),
    }) as GraphqlConfigModel,
});

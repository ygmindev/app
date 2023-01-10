import { AccessResolver } from '@lib/backend/auth/resources/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/backend/auth/resources/Otp/OtpResolver/OtpResolver';
import { SignInResolver } from '@lib/backend/auth/resources/SignIn/SignInResolver/SignInResolver';
import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { LinkedUserResolver } from '@lib/backend/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { UserResolver } from '@lib/backend/user/resources/User/UserResolver/UserResolver';
import type { GraphqlConfigParamsModel } from '@lib/config/http/graphql/graphql.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const graphqlConfig: GraphqlConfigParamsModel = {
  authorize,

  container: Container,

  resolvers: [AccessResolver, OtpResolver, LinkedUserResolver, SignInResolver, UserResolver],

  schemaPath: fromStatic('graphql/schema.gql'),
};

import { AccessResolver } from '@lib/backend/auth/resources/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '@lib/backend/auth/resources/Otp/OtpResolver/OtpResolver';
import { SignInResolver } from '@lib/backend/auth/resources/SignIn/SignInResolver/SignInResolver';
import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { BankResolver } from '@lib/backend/billing/resources/Bank/BankResolver/BankResolver';
import { CardResolver } from '@lib/backend/billing/resources/Card/CardResolver/CardResolver';
import { PaymentMethodResolver } from '@lib/backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { LinkedUserResolver } from '@lib/backend/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { UserResolver } from '@lib/backend/user/resources/User/UserResolver/UserResolver';
import type { _GraphqlConfigParamsModel } from '@lib/config/http/graphql/_graphql.models';
import { Container } from '@lib/backend/core/utils/Container/Container';

const graphqlParamsConfig: _GraphqlConfigParamsModel = {
  authorize,

  container: Container,

  resolvers: [
    AccessResolver,
    BankResolver,
    CardResolver,
    LinkedUserResolver,
    OtpResolver,
    PaymentMethodResolver,
    SignInResolver,
    UserResolver,
  ],

  schemaPath: fromStatic('graphql/schema.gql'),
};

export default graphqlParamsConfig;

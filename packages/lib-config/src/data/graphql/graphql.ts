import { AccessResolver } from '#lib-backend/auth/resources/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '#lib-backend/auth/resources/Otp/OtpResolver/OtpResolver';
import { SignInResolver } from '#lib-backend/auth/resources/SignIn/SignInResolver/SignInResolver';
import { authorize } from '#lib-backend/auth/utils/authorize/authorize';
import { BankResolver } from '#lib-backend/billing/resources/Bank/BankResolver/BankResolver';
import { CardResolver } from '#lib-backend/billing/resources/Card/CardResolver/CardResolver';
import { PaymentMethodResolver } from '#lib-backend/billing/resources/PaymentMethod/PaymentMethodResolver/PaymentMethodResolver';
import { IssuerResolver } from '#lib-backend/capital/resources/Issuer/IssuerResolver/IssuerResolver';
import { UnderwriterResolver } from '#lib-backend/capital/resources/Underwriter/UnderwriterResolver/UnderwriterResolver';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { FundingResolver } from '#lib-backend/funding/resources/Funding/FundingResolver/FundingResolver';
import { RatingAgencyResolver } from '#lib-backend/funding/resources/RatingAgency/RatingAgencyResolver/RatingAgencyResolver';
import { SnapshotResolver } from '#lib-backend/test/resources/Snapshot/SnapshotResolver/SnapshotResolver';
import { LinkedUserResolver } from '#lib-backend/user/resources/LinkedUser/LinkedUserResolver/LinkedUserResolver';
import { UserResolver } from '#lib-backend/user/resources/User/UserResolver/UserResolver';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _graphql } from '#lib-config/data/graphql/_graphql';
import { type GraphqlConfigModel } from '#lib-config/data/graphql/graphql.models';

const { _config, config } = defineConfig({
  _config: _graphql,

  config: () =>
    ({
      authorize,

      container: Container,

      resolvers: [
        AccessResolver,
        BankResolver,
        CardResolver,
        FundingResolver,
        LinkedUserResolver,
        OtpResolver,
        PaymentMethodResolver,
        RatingAgencyResolver,
        SignInResolver,
        UserResolver,
        SnapshotResolver,
        IssuerResolver,
        UnderwriterResolver,
      ],

      schemaDir: fromStatic('graphql/schema.gql'),
    }) satisfies GraphqlConfigModel,
});

export { _config, config };

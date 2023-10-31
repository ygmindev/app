import { AccessResolver } from '#lib-backend/auth/resources/Access/AccessResolver/AccessResolver';
import { OtpResolver } from '#lib-backend/auth/resources/Otp/OtpResolver/OtpResolver';
import { SignInResolver } from '#lib-backend/auth/resources/SignIn/SignInResolver/SignInResolver';
import { authorize } from '#lib-backend/auth/utils/authorize/authorize';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { CreditRatingResolver } from '#lib-backend/funding/resources/CreditRating/CreditRatingResolver/CreditRatingResolver';
import { FundingResolver } from '#lib-backend/funding/resources/Funding/FundingResolver/FundingResolver';
import { FundingQuoteResolver } from '#lib-backend/funding/resources/FundingQuote/FundingQuoteResolver/FundingQuoteResolver';
import { RatingAgencyResolver } from '#lib-backend/funding/resources/RatingAgency/RatingAgencyResolver/RatingAgencyResolver';
import { GroupResolver } from '#lib-backend/group/resources/Group/GroupResolver/GroupResolver';
import { SnapshotResolver } from '#lib-backend/test/resources/Snapshot/SnapshotResolver/SnapshotResolver';
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
        // BankResolver,
        // CardResolver,
        CreditRatingResolver,
        FundingResolver,
        FundingQuoteResolver,
        GroupResolver,
        // LinkedUserResolver,
        OtpResolver,
        // PaymentMethodResolver,
        RatingAgencyResolver,
        SignInResolver,
        UserResolver,
        SnapshotResolver,
      ],

      schemaDir: fromStatic('graphql/schema.gql'),
    }) satisfies GraphqlConfigModel,
});

export { _config, config };

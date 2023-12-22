import { Utility } from '#lib-backend/admin/resources/Utility/Utility';
import { Vendor } from '#lib-backend/admin/resources/Vendor/Vendor';
import { Access } from '#lib-backend/auth/resources/Access/Access';
import { Otp } from '#lib-backend/auth/resources/Otp/Otp';
import { Bank } from '#lib-backend/billing/resources/Bank/Bank';
import { Card } from '#lib-backend/billing/resources/Card/Card';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { FundingQuote } from '#lib-backend/funding/resources/FundingQuote/FundingQuote';
// import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
// import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { Group } from '#lib-backend/group/resources/Group/Group';
import { TestableEntityResource } from '#lib-backend/test/resources/TestableEntityResource/TestableEntityResource';
import { LinkedUser } from '#lib-backend/user/resources/LinkedUser/LinkedUser';
import { User } from '#lib-backend/user/resources/User/User';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _database } from '#lib-config/database/_database';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

const { _config, config } = defineConfig({
  _config: _database,

  config: () => ({
    entities: filterNil([
      Access,
      Bank,
      Card,
      CreditRating,
      LinkedUser,
      Funding,
      FundingQuote,
      Group,
      Otp,
      RatingAgency,
      User,
      Utility,
      Vendor,
      process.env.NODE_ENV !== 'production' && TestableEntityResource,
    ]),

    pool: { max: 10 },
  }),
});

export { _config, config };

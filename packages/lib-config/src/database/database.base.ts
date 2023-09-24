import { Access } from '#lib-backend/auth/resources/Access/Access';
import { Otp } from '#lib-backend/auth/resources/Otp/Otp';
// import { Bank } from '#lib-backend/billing/resources/Bank/Bank';
// import { Card } from '#lib-backend/billing/resources/Card/Card';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { DummyEntityResource } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResource';
import { User } from '#lib-backend/user/resources/User/User';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _database } from '#lib-config/database/_database';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

const { _config, config } = defineConfig({
  _config: _database,

  config: () => ({
    entities: filterNil([
      Access,
      // Bank,
      // Card,
      CreditRating,
      Funding,
      Otp,
      RatingAgency,
      User,
      process.env.NODE_ENV !== 'production' && DummyEntityResource,
    ]),

    pool: { max: 10 },
  }),
});

export { _config, config };

import { AMOUNT_UNIT, RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import { GROUP_FIXTURES } from '#lib-shared/group/resources/Group/Group.fixtures';
import { getEntityResourceFixture } from '#lib-shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const FUNDING_FIXTURES: Array<FundingModel> = getEntityResourceFixture({
  count: 3,

  data: (i) => ({
    [CREDIT_RATING_RESOURCE_NAME]: [],

    [FUNDING_QUOTE_RESOURCE_NAME]: [],

    [GROUP_RESOURCE_NAME]: GROUP_FIXTURES[i],

    amount: {
      min: 100e6,
    },

    currency: 'USD',

    maturity: {
      min: 10,
      unit: RELATIVE_DATE_UNIT.YEAR,
    },
  }),
});

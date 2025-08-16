import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';

export const INTEREST_RATE_RESOURCE_PARAMS = {
  fields: [],
  name: INTEREST_RATE_RESOURCE_NAME,
} satisfies ResourceParamsModel<InterestRateModel>;

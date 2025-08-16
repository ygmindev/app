import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { INTEREST_RATE_FUTURE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.constants';
import { type InterestRateFutureModel } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';

export const INTEREST_RATE_FUTURE_RESOURCE_PARAMS = {
  fields: [],
  name: INTEREST_RATE_FUTURE_RESOURCE_NAME,
} satisfies ResourceParamsModel<InterestRateFutureModel>;

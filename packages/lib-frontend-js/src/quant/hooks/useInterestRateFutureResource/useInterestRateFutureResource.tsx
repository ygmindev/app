import { type UseInterestRateFutureResourceModel } from '@lib/frontend/quant/hooks/useInterestRateFutureResource/useInterestRateFutureResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type InterestRateFutureModel,
} from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { INTEREST_RATE_FUTURE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRateFuture/InterestRateFuture.constants';

export const useInterestRateFutureResource = (): UseInterestRateFutureResourceModel =>
  useResource<InterestRateFutureModel>({
    ...INTEREST_RATE_FUTURE_RESOURCE_PARAMS,
  });

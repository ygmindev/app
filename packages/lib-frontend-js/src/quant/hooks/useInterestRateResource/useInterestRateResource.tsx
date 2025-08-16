import { type UseInterestRateResourceModel } from '@lib/frontend/quant/hooks/useInterestRateResource/useInterestRateResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type InterestRateModel,
} from '@lib/model/quant/InterestRate/InterestRate.models';
import { INTEREST_RATE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRate/InterestRate.constants';

export const useInterestRateResource = (): UseInterestRateResourceModel =>
  useResource<InterestRateModel>({
    ...INTEREST_RATE_RESOURCE_PARAMS,
  });

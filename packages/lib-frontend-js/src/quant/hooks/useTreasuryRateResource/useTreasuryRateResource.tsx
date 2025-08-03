import { type UseTreasuryRateResourceModel } from '@lib/frontend/quant/hooks/useTreasuryRateResource/useTreasuryRateResource.models';
import { TREASURY_RATE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/TreasuryRate/TreasuryRate.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';

export const useTreasuryRateResource = (): UseTreasuryRateResourceModel =>
  useResource<TreasuryRateModel>({
    ...TREASURY_RATE_RESOURCE_PARAMS,
  });

import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { TREASURY_RATE_RESOURCE_NAME } from '@lib/model/quant/TreasuryRate/TreasuryRate.constants';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';

export const TREASURY_RATE_RESOURCE_PARAMS = {
  fields: [],
  name: TREASURY_RATE_RESOURCE_NAME,
} satisfies ResourceParamsModel<TreasuryRateModel>;

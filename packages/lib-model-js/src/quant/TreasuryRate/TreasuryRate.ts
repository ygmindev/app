import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { Curve } from '@lib/model/quant/Curve/Curve';
import { TREASURY_RATE_RESOURCE_NAME } from '@lib/model/quant/TreasuryRate/TreasuryRate.constants';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';

@withEntity({
  isDatabase: true,
  name: TREASURY_RATE_RESOURCE_NAME,
})
export class TreasuryRate extends Curve implements TreasuryRateModel {}

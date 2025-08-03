import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { TREASURY_RATE_RESOURCE_NAME } from '@lib/model/quant/TreasuryRate/TreasuryRate.constants';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({
  isDatabase: true,
  name: TREASURY_RATE_RESOURCE_NAME,
})
export class TreasuryRate extends EntityResource implements TreasuryRateModel {
  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}

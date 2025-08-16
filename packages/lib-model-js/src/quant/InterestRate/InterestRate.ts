import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { Security } from '@lib/model/quant/Security/Security';

@withEntity({
  isDatabase: true,
  name: INTEREST_RATE_RESOURCE_NAME,
})
export class InterestRate extends Security implements InterestRateModel {}

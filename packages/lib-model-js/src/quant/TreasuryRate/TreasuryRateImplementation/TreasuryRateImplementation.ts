import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TreasuryRate } from '@lib/model/quant/TreasuryRate/TreasuryRate';
import { TREASURY_RATE_RESOURCE_NAME } from '@lib/model/quant/TreasuryRate/TreasuryRate.constants';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';
import { type TreasuryRateImplementationModel } from '@lib/model/quant/TreasuryRate/TreasuryRateImplementation/TreasuryRateImplementation.models';

@withContainer({ name: `${TREASURY_RATE_RESOURCE_NAME}Implementation` })
export class TreasuryRateImplementation
  extends createEntityResourceImplementation<TreasuryRateModel>({
    Resource: TreasuryRate,
    name: TREASURY_RATE_RESOURCE_NAME,
  })
  implements TreasuryRateImplementationModel {}

import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TreasuryRate } from '@lib/model/quant/TreasuryRate/TreasuryRate';
import { TREASURY_RATE_RESOURCE_NAME } from '@lib/model/quant/TreasuryRate/TreasuryRate.constants';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';
import { TreasuryRateImplementation } from '@lib/model/quant/TreasuryRate/TreasuryRateImplementation/TreasuryRateImplementation';
import { type TreasuryRateResolverModel } from '@lib/model/quant/TreasuryRate/TreasuryRateResolver/TreasuryRateResolver.models';

@withContainer()
@withResolver({ Resource: () => TreasuryRate })
export class TreasuryRateResolver
  extends createEntityResourceResolver<TreasuryRateModel>({
    Resource: () => TreasuryRate,
    ResourceImplementation: TreasuryRateImplementation,
    name: TREASURY_RATE_RESOURCE_NAME,
  })
  implements TreasuryRateResolverModel {}

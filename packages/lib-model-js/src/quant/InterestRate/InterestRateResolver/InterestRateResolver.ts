import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { InterestRate } from '@lib/model/quant/InterestRate/InterestRate';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { InterestRateImplementation } from '@lib/model/quant/InterestRate/InterestRateImplementation/InterestRateImplementation';
import { type InterestRateResolverModel } from '@lib/model/quant/InterestRate/InterestRateResolver/InterestRateResolver.models';

@withContainer()
@withResolver({ Resource: () => InterestRate })
export class InterestRateResolver
  extends createEntityResourceResolver<InterestRateModel>({
    Resource: () => InterestRate,
    ResourceImplementation: InterestRateImplementation,
    name: INTEREST_RATE_RESOURCE_NAME,
  })
  implements InterestRateResolverModel {}

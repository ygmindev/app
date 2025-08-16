import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import {
  type InterestRateModel,
} from '@lib/model/quant/InterestRate/InterestRate.models';
import { type InterestRateImplementationModel } from '@lib/model/quant/InterestRate/InterestRateImplementation/InterestRateImplementation.models';
import { InterestRate } from '@lib/model/quant/InterestRate/InterestRate.entity';

@withContainer()
export class InterestRateImplementation
  extends createEntityResourceImplementation<InterestRateModel>({
    Resource: InterestRate,
    name: INTEREST_RATE_RESOURCE_NAME,
  })
  implements InterestRateImplementationModel {}

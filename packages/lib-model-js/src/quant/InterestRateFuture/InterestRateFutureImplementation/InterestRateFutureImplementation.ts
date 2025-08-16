import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { INTEREST_RATE_FUTURE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.constants';
import {
  type InterestRateFutureModel,
} from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { type InterestRateFutureImplementationModel } from '@lib/model/quant/InterestRateFuture/InterestRateFutureImplementation/InterestRateFutureImplementation.models';
import { InterestRateFuture } from '@lib/model/quant/InterestRateFuture/InterestRateFuture';

@withContainer()
export class InterestRateFutureImplementation
  extends createEntityResourceImplementation<InterestRateFutureModel>({
    Resource: InterestRateFuture,
    name: INTEREST_RATE_FUTURE_RESOURCE_NAME,
  })
  implements InterestRateFutureImplementationModel {}

import { InterestRateFuture } from '@lib/model/quant/InterestRateFuture/InterestRateFuture';
import { InterestRateFutureImplementation } from '@lib/model/quant/InterestRateFuture/InterestRateFutureImplementation/InterestRateFutureImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { INTEREST_RATE_FUTURE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.constants';
import {
  type InterestRateFutureModel,
} from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { type InterestRateFutureResolverModel } from '@lib/model/quant/InterestRateFuture/InterestRateFutureResolver/InterestRateFutureResolver.models';

@withContainer()
@withResolver({ Resource: () => InterestRateFuture })
export class InterestRateFutureResolver
  extends createEntityResourceResolver<InterestRateFutureModel>({
    Resource: () => InterestRateFuture,
    ResourceImplementation: InterestRateFutureImplementation,
    name: INTEREST_RATE_FUTURE_RESOURCE_NAME,
  })
  implements InterestRateFutureResolverModel {}

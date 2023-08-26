import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { FundingService } from '#lib-backend/funding/resources/Funding/FundingService/FundingService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';
import { type FundingResolverModel } from '#lib-backend/funding/resources/Funding/FundingResolver/FundingResolver.models';

@withContainer()
@withResolver({ Resource: Funding })
export class FundingResolver
  extends createEntityResourceResolver<FundingModel, FundingFormModel>({
    Resource: Funding,
    ResourceService: FundingService,
    name: FUNDING_RESOURCE_NAME,
  })
  implements FundingResolverModel {}

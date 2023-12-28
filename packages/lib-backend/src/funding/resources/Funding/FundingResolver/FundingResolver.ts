import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { type FundingResolverModel } from '#lib-backend/funding/resources/Funding/FundingResolver/FundingResolver.models';
import { FundingService } from '#lib-backend/funding/resources/Funding/FundingService/FundingService';
import { withFieldResolver } from '#lib-backend/http/utils/withFieldResolver/withFieldResolver';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { withSelf } from '#lib-backend/http/utils/withSelf/withSelf';
import { createProtectedResourceResolver } from '#lib-backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';

@withContainer()
@withResolver({ Resource: () => Funding })
export class FundingResolver
  extends createProtectedResourceResolver<FundingModel, FundingFormModel>({
    Resource: () => Funding,
    ResourceService: FundingService,
    name: FUNDING_RESOURCE_NAME,
  })
  implements FundingResolverModel
{
  @withFieldResolver()
  async quoteCount(@withSelf() self: FundingModel): Promise<number | undefined> {
    return self[FUNDING_QUOTE_RESOURCE_NAME]?.length;
  }
}

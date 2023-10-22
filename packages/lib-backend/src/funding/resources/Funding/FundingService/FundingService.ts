import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';
import { type FundingServiceModel } from '#lib-shared/funding/resources/Funding/FundingService/FundingService.models';

@withContainer({ name: `${FUNDING_RESOURCE_NAME}Service` })
export class FundingService
  extends createEntityResourceService<FundingModel, FundingFormModel>({
    Resource: Funding,
    name: FUNDING_RESOURCE_NAME,
  })
  implements FundingServiceModel {}

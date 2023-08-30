import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/funding/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/funding/resources/Underwriter/Underwriter.models';
import { type UnderwriterServiceModel } from '#lib-shared/funding/resources/Underwriter/UnderwriterService/UnderwriterService.models';

@withContainer({ name: `${UNDERWRITER_RESOURCE_NAME}Service` })
export class UnderwriterService
  extends createEntityResourceService<UnderwriterModel, UnderwriterFormModel>({
    name: UNDERWRITER_RESOURCE_NAME,
  })
  implements UnderwriterServiceModel {}

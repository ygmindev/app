import { Underwriter } from '#lib-backend/capital/resources/Underwriter/Underwriter';
import { type UnderwriterResolverModel } from '#lib-backend/capital/resources/Underwriter/UnderwriterResolver/UnderwriterResolver.models';
import { UnderwriterService } from '#lib-backend/capital/resources/Underwriter/UnderwriterService/UnderwriterService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/capital/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/capital/resources/Underwriter/Underwriter.models';

@withContainer()
@withResolver({ Resource: Underwriter })
export class UnderwriterResolver
  extends createEntityResourceResolver<UnderwriterModel, UnderwriterFormModel>({
    Resource: Underwriter,
    ResourceService: UnderwriterService,
    name: UNDERWRITER_RESOURCE_NAME,
  })
  implements UnderwriterResolverModel {}

import { Specification } from '@lib/backend/openapi/resources/Specification/Specification';
import { SpecificationImplementation } from '@lib/backend/openapi/resources/Specification/SpecificationImplementation/SpecificationImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { SPECIFICATION_RESOURCE_NAME } from '@lib/shared/openapi/resources/Specification/Specification.constants';
import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';
import { type SpecificationResolverModel } from '@lib/backend/openapi/resources/Specification/SpecificationResolver/SpecificationResolver.models';

@withContainer()
@withResolver({ Resource: () => Specification })
export class SpecificationResolver
  extends createEntityResourceResolver<SpecificationModel, SpecificationFormModel>({
    Resource: () => Specification,
    ResourceImplementation: SpecificationImplementation,
    name: SPECIFICATION_RESOURCE_NAME,
  })
  implements SpecificationResolverModel {}

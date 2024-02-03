import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { SPECIFICATION_RESOURCE_NAME } from '@lib/shared/openapi/resources/Specification/Specification.constants';
import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';
import { type SpecificationImplementationModel } from '@lib/shared/openapi/resources/Specification/SpecificationImplementation/SpecificationImplementation.models';
import { Specification } from '@lib/backend/openapi/resources/Specification/Specification';

@withContainer({ name: `${SPECIFICATION_RESOURCE_NAME}Implementation` })
export class SpecificationImplementation
  extends createEntityResourceImplementation<SpecificationModel, SpecificationFormModel>({
    Resource: Specification,
    name: SPECIFICATION_RESOURCE_NAME,
  })
  implements SpecificationImplementationModel {}

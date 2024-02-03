import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/openapi/resources/Utility/Utility.constants';
import { SPECIFICATION_RESOURCE_NAME } from '@lib/shared/openapi/resources/Specification/Specification.constants';
import { type SpecificationModel } from '@lib/shared/openapi/resources/Specification/Specification.models';

export const SPECIFICATION_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }],
  name: SPECIFICATION_RESOURCE_NAME,
} satisfies ResourceParamsModel<SpecificationModel>;

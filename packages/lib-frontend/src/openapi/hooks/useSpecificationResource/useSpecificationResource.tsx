import { SPECIFICATION_FIELDS } from '@lib/frontend/openapi/hooks/useSpecificationResource/useSpecificationResource.constants';
import { type UseSpecificationResourceModel } from '@lib/frontend/openapi/hooks/useSpecificationResource/useSpecificationResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { SPECIFICATION_RESOURCE_NAME } from '@lib/shared/openapi/resources/Specification/Specification.constants';
import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';

export const useSpecificationResource = (): UseSpecificationResourceModel =>
  useResource<SpecificationModel, SpecificationFormModel>({
    fields: [{ result: SPECIFICATION_FIELDS }],
    name: SPECIFICATION_RESOURCE_NAME,
  });

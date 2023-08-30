import { UNDERWRITER_FIELDS } from '#lib-frontend/funding/hooks/useUnderwriterResource/useUnderwriterResource.constants';
import { type UseUnderwriterResourceModel } from '#lib-frontend/funding/hooks/useUnderwriterResource/useUnderwriterResource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/funding/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/funding/resources/Underwriter/Underwriter.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';

export const useUnderwriterResource = (): UseUnderwriterResourceModel => {
  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    UnderwriterModel,
    UnderwriterFormModel
  >({
    fields: UNDERWRITER_FIELDS,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: UNDERWRITER_RESOURCE_NAME,
  });
  return { create };
};

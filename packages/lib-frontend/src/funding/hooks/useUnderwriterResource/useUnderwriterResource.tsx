import { UNDERWRITER_FIELDS } from '#lib-frontend/funding/hooks/useUnderwriterResource/useUnderwriterResource.constants';
import { type UseUnderwriterResourceModel } from '#lib-frontend/funding/hooks/useUnderwriterResource/useUnderwriterResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { UNDERWRITER_RESOURCE_NAME } from '#lib-shared/funding/resources/Underwriter/Underwriter.constants';
import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/funding/resources/Underwriter/Underwriter.models';

export const useUnderwriterResource = (): UseUnderwriterResourceModel =>
  useResource<UnderwriterModel, UnderwriterFormModel>({
    fields: [{ result: UNDERWRITER_FIELDS }],
    name: UNDERWRITER_RESOURCE_NAME,
  });

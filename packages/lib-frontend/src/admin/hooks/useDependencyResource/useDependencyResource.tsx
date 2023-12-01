import { DEPENDENCY_FIELDS } from '#lib-frontend/admin/hooks/useDependencyResource/useDependencyResource.constants';
import { type UseDependencyResourceModel } from '#lib-frontend/admin/hooks/useDependencyResource/useDependencyResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { DEPENDENCY_RESOURCE_NAME } from '#lib-shared/admin/resources/Dependency/Dependency.constants';
import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';

export const useDependencyResource = (): UseDependencyResourceModel =>
  useResource<DependencyModel, DependencyFormModel>({
    fields: [{ result: DEPENDENCY_FIELDS }],
    name: DEPENDENCY_RESOURCE_NAME,
  });

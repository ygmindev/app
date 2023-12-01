import { DEPENDENCY_TABLE_PROPS } from '#lib-frontend/admin/containers/DependencyTable/DependencyTable.constants';
import { type DependencyTablePropsModel } from '#lib-frontend/admin/containers/DependencyTable/DependencyTable.models';
import { useDependencyResource } from '#lib-frontend/admin/hooks/useDependencyResource/useDependencyResource';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';

export const DependencyTable: LFCModel<DependencyTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const service = useDependencyResource();
  return (
    <ResourceTable<DependencyModel, DependencyFormModel>
      {...wrapperProps}
      {...DEPENDENCY_TABLE_PROPS}
      service={service}
    />
  );
};

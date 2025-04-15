import { type RoleTablePropsModel } from '@lib/frontend/auth/containers/RoleTable/RoleTable.models';
import { useRoleResource } from '@lib/frontend/auth/hooks/useRoleResource/useRoleResource';
import { ROLE_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Role/Role.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

export const RoleTable: LFCModel<RoleTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useRoleResource();
  return (
    <ResourceTable<RoleModel, GroupModel>
      {...wrapperProps}
      {...ROLE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};

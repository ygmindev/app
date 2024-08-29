import { type LFCModel } from '@lib/frontend/core/core.models';
import { type GroupTablePropsModel } from '@lib/frontend/group/containers/GroupTable/GroupTable.models';
import { useGroupResource } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource';
import { GROUP_RESOURCE_PARAMS } from '@lib/frontend/group/resources/Group/Group.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type GroupFormModel,
  type GroupModel,
} from '@lib/shared/group/resources/Group/Group.models';

export const GroupTable: LFCModel<GroupTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useGroupResource();
  return (
    <ResourceTable<GroupModel, GroupFormModel>
      {...wrapperProps}
      {...GROUP_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};

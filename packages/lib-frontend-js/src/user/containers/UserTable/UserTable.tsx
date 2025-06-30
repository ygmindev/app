import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type UserTablePropsModel } from '@lib/frontend/user/containers/UserTable/UserTable.models';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export const UserTable: LFCModel<UserTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useUserResource();
  return (
    <ResourceTable<UserModel>
      {...wrapperProps}
      {...USER_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};

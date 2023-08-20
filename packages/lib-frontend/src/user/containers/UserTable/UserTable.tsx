import { type SFCModel } from '#lib-frontend/core/core.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { USER_TABLE_PROPS } from '#lib-frontend/user/containers/UserTable/UserTable.constants';
import { type UserTablePropsModel } from '#lib-frontend/user/containers/UserTable/UserTable.models';
import { useUserResource } from '#lib-frontend/user/hooks/useUserResource/useUserResource';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const UserTable: SFCModel<UserTablePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const service = useUserResource();
  return (
    <ResourceTable<UserModel, UserFormModel>
      {...USER_TABLE_PROPS}
      service={service}
      style={styles}
      testID={testID}
    />
  );
};

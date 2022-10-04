import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { EntityResourceTable } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { USER_TABLE_PROPS } from '@lib/frontend/user/containers/UserTable/UserTable.constants';
import type { UserTablePropsModel } from '@lib/frontend/user/containers/UserTable/UserTable.models';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

export const UserTable: SFCModel<UserTablePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <EntityResourceTable<UserModel, UserFormModel> {...USER_TABLE_PROPS} />
    </Wrapper>
  );
};

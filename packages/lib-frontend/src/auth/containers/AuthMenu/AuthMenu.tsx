import { AUTH_MENU_OPTIONS } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import type { AuthMenuPropsModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useSignInResourceResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { useMemo } from 'react';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const { signOut } = useSignInResourceResource();
  const user = useSelector((state) => state.user.currentUser);

  const options = useMemo(
    () =>
      AUTH_MENU_OPTIONS.map((option) => ({
        ...option,
        onPress: (option as SelectOptionModel).id === SIGN_OUT ? signOut : undefined,
      })),
    [signOut],
  );

  return (
    <Menu
      anchor={(isOpen) => (
        <Icon
          icon={ICON.person}
          isPressed={isOpen}
          size={THEME_SIZE.LARGE}
        />
      )}
      isCenter={false}
      options={options}
      style={styles}
    />
  );
};

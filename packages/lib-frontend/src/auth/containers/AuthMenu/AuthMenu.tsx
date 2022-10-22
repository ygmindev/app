import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import {
  AUTH_MENU_OPTIONS,
  AUTH_MENU_USERNAME_WIDTH,
} from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import type { AuthMenuPropsModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useSignIn } from '@lib/frontend/auth/hooks/useSignIn/useSignIn';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FONT_ALIGN } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import { AUTH, SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { useMemo } from 'react';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const { signOut } = useSignIn();
  const user = useSelector((state) => state.user.currentUser);

  useTranslation([AUTH]);

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
      topElement={
        user ? (
          <Text
            align={FONT_ALIGN.CENTER}
            isEllipsis
            width={AUTH_MENU_USERNAME_WIDTH}>
            {user.email}
          </Text>
        ) : (
          <SignInButton />
        )
      }
    />
  );
};

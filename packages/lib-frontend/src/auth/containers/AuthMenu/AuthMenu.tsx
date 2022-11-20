import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import {
  AUTH_MENU_OPTIONS,
  AUTH_MENU_USERNAME_WIDTH,
} from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import type { AuthMenuPropsModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import type { LocationModel } from '@lib/frontend/routing/routing.models';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FONT_ALIGN } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.constants';
import { AUTH, SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { useMemo } from 'react';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const user = useSelector((state) => state.user.currentUser);

  useTranslation([AUTH, SETTINGS]);

  const options = useMemo(
    () =>
      AUTH_MENU_OPTIONS.map((option) => ({
        ...option,
        onPress: (option as LocationModel).pathname
          ? () => push({ pathname: (option as LocationModel).pathname })
          : option.id === SIGN_OUT
          ? signOut
          : (option as SelectOptionModel).onPress,
      })),
    [signOut],
  );

  return (
    <Menu
      anchor={(isOpen) => (
        <Icon
          icon={ICON.person}
          isPressed={isOpen}
          isTitle
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

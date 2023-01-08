import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import {
  AUTH_MENU_OPTIONS,
  AUTH_MENU_USERNAME_WIDTH,
} from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import type { AuthMenuPropsModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { AUTH, SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { SETTINGS } from '@lib/shared/settings/settings.constants';
import { useMemo } from 'react';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  const { styles } = useStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const currentUser = useStore((state) => state.user.currentUser);

  const { t } = useTranslation([AUTH, SETTINGS]);

  const options = useMemo(
    () =>
      AUTH_MENU_OPTIONS.map((option) => ({
        ...option,
        label: t(option.label),
        onPress:
          option.id === SETTINGS
            ? () => push({ pathname: SETTINGS })
            : option.id === SIGN_OUT
            ? signOut
            : option.onPress,
      })),
    [signOut],
  );

  return (
    <Menu
      anchor={(isOpen) => (
        <Button
          icon="person"
          isPressed={isOpen}
          type={BUTTON_TYPE.ICON}
        />
      )}
      options={options}
      style={styles}
      topElement={
        currentUser ? (
          <Text
            align={FONT_ALIGN.CENTER}
            isEllipsis
            width={AUTH_MENU_USERNAME_WIDTH}>
            {currentUser.email}
          </Text>
        ) : (
          <SignInButton />
        )
      }
    />
  );
};

import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import type { AuthMenuOptionModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import { AUTH_MENU_OPTIONS } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.constants';
import type { AuthMenuPropsModel } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useAuthState } from '@lib/frontend/auth/hooks/useAuthState/useAuthState';
import { AUTH_STATE } from '@lib/frontend/auth/hooks/useAuthState/useAuthState.constants';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_CASING,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  useTranslation();
  const { styles } = useStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const authState = useAuthState();
  const currentUser = useStore((state) => state.user.currentUser);
  const _optionsOverrides: Record<string, PartialModel<AuthMenuOptionModel>> = {
    [ACCOUNT]: { onPress: () => push({ pathname: ACCOUNT }) },
    [SIGN_OUT]: { onPress: signOut },
  };
  const _options = AUTH_MENU_OPTIONS.reduce(
    (result, option) =>
      option.isProtected && authState !== AUTH_STATE.AUTHENTICATED
        ? result
        : [...result, merge<AuthMenuOptionModel>([_optionsOverrides[option.id] || {}, option])],
    [] as Array<AuthMenuOptionModel>,
  );

  return (
    <Menu
      anchor={(isOpen) => (
        <Button
          elementState={isOpen ? ELEMENT_STATE.ACTIVE : undefined}
          icon="personCircle"
        />
      )}
      options={_options}
      style={styles}
      topElement={
        currentUser ? (
          <Text
            align={FONT_ALIGN.CENTER}
            casing={FONT_CASING.ORIGINAL}
            isEllipsis
            isFullWidth
            p={THEME_SIZE.SMALL}>
            {currentUser.email}
          </Text>
        ) : (
          <SignInButton />
        )
      }
    />
  );
};

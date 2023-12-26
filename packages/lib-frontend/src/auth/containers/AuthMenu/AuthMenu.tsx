import { useRef } from 'react';

import { SignInButton } from '#lib-frontend/auth/components/SignInButton/SignInButton';
import { type AuthMenuOptionModel } from '#lib-frontend/auth/containers/AuthMenu/AuthMenu.constants';
import { AUTH_MENU_OPTIONS } from '#lib-frontend/auth/containers/AuthMenu/AuthMenu.constants';
import { type AuthMenuPropsModel } from '#lib-frontend/auth/containers/AuthMenu/AuthMenu.models';
import { useSignInResource } from '#lib-frontend/auth/hooks/useSignInResource/useSignInResource';
import { AUTH_STATUS } from '#lib-frontend/auth/stores/authStore/authStore.constants';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { Menu } from '#lib-frontend/core/components/Menu/Menu';
import { type MenuRefModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_ALIGN } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SIGN_OUT } from '#lib-shared/auth/auth.constants';
import { type PartialModel } from '#lib-shared/core/core.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const AuthMenu: SFCModel<AuthMenuPropsModel> = ({ ...props }) => {
  useTranslation();
  const { styles } = useStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const [authStatus] = useStore('auth.status');
  const [currentUser] = useStore('user.currentUser');
  const isNotAuthenticated = authStatus !== AUTH_STATUS.AUTHENTICATED;
  const optionsOverrides: Record<string, PartialModel<AuthMenuOptionModel>> = {
    [ACCOUNT]: { onPress: () => push({ pathname: ACCOUNT }) },
    [SIGN_OUT]: { onPress: signOut },
  };
  const optionsF = AUTH_MENU_OPTIONS.reduce(
    (result, option) =>
      option.isProtected && isNotAuthenticated
        ? result
        : [...result, merge<AuthMenuOptionModel>([optionsOverrides[option.id] ?? {}, option])],
    [] as Array<AuthMenuOptionModel>,
  );
  const menuRef = useRef<MenuRefModel>(null);

  return (
    <Menu
      anchor={(isOpen) => (
        <Button
          elementState={isOpen ? ELEMENT_STATE.ACTIVE : undefined}
          icon="personCircle"
        />
      )}
      options={optionsF}
      ref={menuRef}
      style={styles}
      topElement={
        isNotAuthenticated ? (
          <SignInButton onPress={() => menuRef.current?.toggle(false)} />
        ) : (
          <Wrapper s={THEME_SIZE.SMALL}>
            <Text
              align={FONT_ALIGN.CENTER}
              isEllipsis
              isFullWidth
              p={THEME_SIZE.SMALL}>
              {currentUser?.email}
            </Text>

            <Divider />
          </Wrapper>
        )
      }
    />
  );
};

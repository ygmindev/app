import { APP_MENU_BUTTON_TEST_ID } from '@lib/frontend/app/containers/AppMenuButton/AppMenuButton.constants';
import { type AppMenuButtonPropsModel } from '@lib/frontend/app/containers/AppMenuButton/AppMenuButton.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import {
  type MenuOptionModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PROFILE } from '@lib/frontend/user/user.constants';
import { AUTH, SIGN_IN, SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { useRef } from 'react';

export const AppMenuButton: LFCModel<AppMenuButtonPropsModel> = ({
  isMinimized = false,
  ...props
}) => {
  const { t } = useTranslation([AUTH]);
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const [authStatus] = useStore('auth.status');

  const menuRef = useRef<MenuRefModel>(null);
  const isAuthenticated = authStatus === AUTH_STATUS.AUTHENTICATED;
  const currentUser = useCurrentUser();

  const optionsF: Array<MenuOptionModel> = isAuthenticated
    ? [
        {
          icon: 'settings',
          id: SETTINGS,
          label: t('settings:settings'),
          onPress: () => push({ pathname: `#${SETTINGS}/${PROFILE}` }),
        },
        {
          color: THEME_COLOR.ERROR,
          icon: 'signout',
          id: SIGN_OUT,
          label: t('auth:signOut'),
          onPress: signOut,
        },
      ]
    : [
        {
          icon: 'signin',
          id: SIGN_IN,
          label: `${t('auth:signIn')} ${t('core:or')} ${t('auth:register')}`,
          onPress: () => push({ pathname: SIGN_IN }),
        },
      ];

  return (
    <Menu
      {...wrapperProps}
      anchor={(isOpen) => (
        <Button
          elementState={isOpen ? ELEMENT_STATE.ACTIVE : undefined}
          height={isMinimized ? theme.shape.size[THEME_SIZE.MEDIUM] : undefined}
          icon={isAuthenticated ? 'personCircle' : 'signin'}
          isFullWidth={!isMinimized}
          tooltip={t('core:menu')}
          width={isMinimized ? theme.shape.size[THEME_SIZE.MEDIUM] : undefined}>
          {isMinimized ? undefined : isAuthenticated ? currentUser?.email : t('auth:signIn')}
        </Button>
      )}
      options={optionsF}
      ref={menuRef}
      testID={APP_MENU_BUTTON_TEST_ID}
      title={currentUser?.email}
    />
  );
};

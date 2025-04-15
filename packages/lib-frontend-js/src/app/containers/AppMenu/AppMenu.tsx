import { type AppMenuPropsModel } from '@lib/frontend/app/containers/AppMenu/AppMenu.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import {
  type MenuOptionModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { AUTH, SIGN_IN, SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';
import { useRef } from 'react';

export const AppMenu: LFCModel<AppMenuPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([AUTH]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { signOut } = useSignInResource();
  const { push } = useRouter();
  const [authStatus] = useStore('auth.status');
  const [currentUser] = useStore('user.currentUser');
  const menuRef = useRef<MenuRefModel>(null);
  const isAuthenticated = authStatus === AUTH_STATUS.AUTHENTICATED;

  const optionsF: Array<MenuOptionModel> = isAuthenticated
    ? [
        {
          icon: 'personCircle',
          id: ACCOUNT,
          label: t('user:account'),
          onPress: () => push({ pathname: ACCOUNT }),
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
          icon="menu"
          tooltip={t('core:menu')}
          type={BUTTON_TYPE.INVISIBLE}
        />
      )}
      options={optionsF}
      ref={menuRef}
      title={isAuthenticated ? currentUser?.email : undefined}
    />
  );
};

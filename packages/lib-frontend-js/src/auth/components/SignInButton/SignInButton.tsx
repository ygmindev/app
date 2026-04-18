import { type SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { AUTH, SIGN_IN } from '@lib/shared/auth/auth.constants';

export const SignInButton: LFCModel<SignInButtonPropsModel> = ({ onPress, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AUTH]);
  const { push } = useRouter();
  const [authStatus] = useStore('auth.status');
  const isAuthenticated = authStatus === AUTH_STATUS.AUTHENTICATED;
  return isAuthenticated ? null : (
    <Button
      {...wrapperProps}
      icon="signin"
      onPress={async () => {
        await onPress?.();
        push({ pathname: `#${SIGN_IN}` });
      }}>
      {t('auth:signIn')}
    </Button>
  );
};

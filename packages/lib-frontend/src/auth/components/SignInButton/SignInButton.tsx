import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { type SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { AUTH } from '@lib/shared/auth/auth.constants';

export const SignInButton: LFCModel<SignInButtonPropsModel> = ({ onPress, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AUTH]);
  const { push } = useRouter();
  return (
    <Button
      {...wrapperProps}
      icon="signin"
      onPress={async () => {
        onPress && (await onPress());
        push({ pathname: SIGN_IN });
      }}>
      {`${t('auth:signIn')} ${t('core:or')} ${t('auth:register')}`}
    </Button>
  );
};

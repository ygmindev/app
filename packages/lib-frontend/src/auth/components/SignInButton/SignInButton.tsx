import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import type { SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { AUTH } from '@lib/shared/auth/auth.constants';

export const SignInButton: SFCModel<SignInButtonPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([AUTH]);
  const { push } = useRouter();

  return (
    <Button
      onPress={() => push({ pathname: SIGN_IN })}
      style={styles}
      testID={testID}>
      {t('auth:labels.signIn')}
    </Button>
  );
};

import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { RegisterFormPropsModel } from '@lib/frontend/auth/containers/RegisterForm/RegisterForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/form/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SIGN_IN_MODE } from '@lib/shared/auth/auth.constants';
import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export const RegisterForm: SFCModel<RegisterFormPropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { replace } = useRouter();
  const { signIn } = useSignInResource();
  return (
    <StepForm<SignInFormModel, [UsernameFormModel, OtpFormModel]>
      onSubmit={signIn}
      onSuccess={async () => replace({ pathname: '/' })}
      steps={[
        {
          element: <UsernameForm mode={SIGN_IN_MODE.REGISTER} />,
          id: 'username',
        },
        {
          element: <OtpForm />,
          id: 'otp',
        },
      ]}
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>
        {t('core:labels.welcome', { value: process.env.APP_NAME })}
      </Text>
    </StepForm>
  );
};

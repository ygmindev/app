import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/form/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SIGN_IN_MODE } from '@lib/shared/auth/auth.constants';
import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export const SignInForm: SFCModel<SignInFormPropsModel> = ({ method, mode, testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { replace } = useRouter();
  const { signIn, usernameUpdate } = useSignInResource();

  const handleSubmit = async (form: SignInFormModel): Promise<void> =>
    mode === SIGN_IN_MODE.SIGN_IN ? signIn(form) : usernameUpdate(form);

  return (
    <StepForm<SignInFormModel, [UsernameFormModel, OtpFormModel]>
      onSubmit={handleSubmit}
      onSuccess={async () => replace({ pathname: '/' })}
      steps={[
        {
          element: (
            <UsernameForm
              method={method}
              mode={mode}
            />
          ),
          id: 'username',
        },
        {
          element: <OtpForm />,
          id: 'otp',
        },
      ]}
      style={styles}
      testID={testID}>
      {mode !== SIGN_IN_MODE.UPDATE && (
        <Wrapper
          isCenter
          spacing>
          <Text type={FONT_TYPE.HEADLINE}>
            {t('core:labels.welcome', { value: process.env.APP_NAME })}
          </Text>

          <Text fontSize={THEME_SIZE.LARGE}>
            {`${t('auth:labels.signIn')} ${t('core:labels.or')} ${t('auth:labels.register')}`}
          </Text>
        </Wrapper>
      )}
    </StepForm>
  );
};

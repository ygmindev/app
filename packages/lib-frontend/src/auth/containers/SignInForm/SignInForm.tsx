import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import { type SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { type SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { FORM_MODE } from '@lib/shared/data/data.constants';

export const SignInForm: LFCModel<SignInFormPropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  redirectTo,
  successMessage,
  ...props
}) => {
  const { t } = useTranslation([AUTH]);
  const { signIn, usernameUpdate } = useSignInResource();
  const { replace } = useRouter();

  const handleSubmit = async (form: SignInFormModel): Promise<void> =>
    mode === FORM_MODE.NEW ? signIn(form) : usernameUpdate(form);

  return (
    <StepForm
      {...props}
      onSubmit={handleSubmit}
      redirectTo={redirectTo}
      steps={[
        {
          element: (
            <UsernameForm
              method={method}
              mode={mode}
              onCancel={
                redirectTo && redirectTo?.pathname !== '/' ? () => replace(redirectTo) : undefined
              }
            />
          ),
          id: 'username',
          title: t('auth:username'),
        },
        { element: <OtpForm />, id: 'otp', title: t('auth:otp') },
      ]}
      successMessage={successMessage}
      topElement={
        mode === FORM_MODE.UPDATE ? undefined : (
          <Wrapper
            isCenter
            s>
            <Text fontStyle={FONT_STYLE.HEADLINE}>
              {t('core:welcome', { value: process.env.APP_NAME })}
            </Text>

            <Text fontSize={THEME_SIZE.LARGE}>
              {`${t('auth:signIn')} ${t('core:or')} ${t('auth:register')}`}
            </Text>
          </Wrapper>
        )
      }
    />
  );
};

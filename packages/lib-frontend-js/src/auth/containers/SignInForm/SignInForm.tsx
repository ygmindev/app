import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import { type SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useContainer } from '@lib/frontend/core/hooks/useContainer/useContainer';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { type SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { FORM_MODE } from '@lib/shared/data/data.constants';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const SignInForm: LFCModel<SignInFormPropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  successMessage,
  ...props
}) => {
  const { t } = useTranslation([AUTH]);
  const { signIn, usernameUpdate } = useSignInResource();
  const { location } = useRouter();
  const pubsub = useContainer(PubSub);

  const handleSubmit = async (form: SignInFormModel): Promise<void> => {
    await Promise.all([
      pubsub.waitFor({ topic: SIGN_IN }),
      mode === FORM_MODE.NEW ? signIn(form) : usernameUpdate(form),
    ]);
  };

  return (
    <StepForm
      {...props}
      errorContextGet={(e) =>
        (e as HttpError).statusCode === HTTP_STATUS_CODE.UNAUTHORIZED
          ? {
              description: ({ t }) => t('auth:wrongOtp'),
              icon: 'ban',
              title: ({ t }) => t('auth:wrongOtp'),
            }
          : undefined
      }
      onSubmit={handleSubmit}
      redirect={location.params?.redirect ?? { pathname: '/' }}
      steps={[
        {
          element: (
            <UsernameForm
              method={method}
              mode={mode}
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

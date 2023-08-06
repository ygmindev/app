import { useMemo } from 'react';

import { type OtpFormModel } from '#lib-frontend/auth/containers/OtpForm/OtpForm.models';
import { SIGN_IN_FORM_STEPS } from '#lib-frontend/auth/containers/SignInForm/SignInForm.constants';
import { type SignInFormPropsModel } from '#lib-frontend/auth/containers/SignInForm/SignInForm.models';
import { type UsernameFormModel } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useSignInResource } from '#lib-frontend/auth/hooks/useSignInResource/useSignInResource';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/form/components/StepForm/StepForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SIGN_IN_MODE } from '#lib-shared/auth/auth.constants';
import { type SignInFormModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const SignInForm: SFCModel<SignInFormPropsModel> = ({
  method,
  mode,
  redirectTo,
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { replace } = useRouter();
  const { signIn, usernameUpdate } = useSignInResource();

  const handleSubmit = async (form: SignInFormModel): Promise<void> =>
    mode === SIGN_IN_MODE.SIGN_IN ? signIn(form) : usernameUpdate(form);

  const steps = useMemo(() => SIGN_IN_FORM_STEPS({ method, mode }), [method, mode]);

  return (
    <StepForm<SignInFormModel, [UsernameFormModel, OtpFormModel]>
      onSubmit={handleSubmit}
      onSuccess={async () => {
        await sleep();
        await replace({ pathname: redirectTo ?? '/' });
      }}
      steps={steps}
      style={styles}
      testID={testID}>
      {mode !== SIGN_IN_MODE.UPDATE && (
        <Wrapper
          isCenter
          s>
          <Text type={FONT_TYPE.HEADLINE}>
            {t('core:welcome', { value: process.env.APP_NAME })}
          </Text>

          <Text fontSize={THEME_SIZE.LARGE}>
            {`${t('auth:signIn')} ${t('core:or')} ${t('auth:register')}`}
          </Text>
        </Wrapper>
      )}
    </StepForm>
  );
};

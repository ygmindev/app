import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { SIGN_IN_FORM_MODE } from '@lib/frontend/auth/containers/SignInForm/SignInForm.constants';
import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/form/components/StepForm/StepForm';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export const SignInForm: SFCModel<SignInFormPropsModel> = ({ mode, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { replace } = useRouter();
  const { signIn, usernameUpdate } = useSignInResource();

  const _handleSubmit = async (form: SignInFormModel): Promise<void> => {
    await (mode === SIGN_IN_FORM_MODE.CREATE ? signIn(form) : usernameUpdate(form));
    replace({ pathname: '/' });
  };

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <StepForm<SignInFormModel, [UsernameFormModel, OtpFormModel]>
        onSubmit={_handleSubmit}
        steps={[
          {
            element: <UsernameForm isCheckIfNotExists={mode === SIGN_IN_FORM_MODE.UPDATE} />,
            id: 'username',
          },
          { element: <OtpForm />, id: 'otp' },
        ]}
      />
    </Wrapper>
  );
};

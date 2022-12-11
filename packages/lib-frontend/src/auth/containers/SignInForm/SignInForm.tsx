import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { FormSteps } from '@lib/frontend/form/components/FormSteps/FormSteps';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { OtpFormModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export const SignInForm: SFCModel<SignInFormPropsModel> = ({
  isCheckIfNotExists,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { back, replace } = useRouter();
  const { signIn } = useSignInResource();

  const _handleSubmit = async (form: SignInFormModel): Promise<void> => {
    await signIn(form);
    back ? back() : replace({ pathname: '/' });
  };

  return (
    <Wrapper grow style={styles} testID={testID}>
      <FormSteps<SignInFormModel, [UsernameFormModel, OtpFormModel]> onSubmit={_handleSubmit}>
        <UsernameForm isCheckIfNotExists={isCheckIfNotExists} />

        <OtpForm />
      </FormSteps>
    </Wrapper>
  );
};

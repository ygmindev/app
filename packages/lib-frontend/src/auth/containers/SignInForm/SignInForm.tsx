import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
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
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      {/* <FormSteps<SignInFormModel, [UsernameFormModel, OtpFormModel]> onSubmit={_handleSubmit}>
        <UsernameForm isCheckIfNotExists={isCheckIfNotExists} />

        <OtpForm />
      </FormSteps> */}

      <UsernameForm isCheckIfNotExists={isCheckIfNotExists} />
    </Wrapper>
  );
};

import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { FormSteps } from '@lib/frontend/form/components/FormSteps/FormSteps';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const SignInForm: SFCModel<SignInFormPropsModel> = ({
  isActive,
  isCheckIfNotExists,
  onSubmit,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <FormSteps>
        <UsernameForm isCheckIfNotExists={isCheckIfNotExists} />

        <OtpForm />
      </FormSteps>
    </Wrapper>
  );
};

import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import { Steps } from '@lib/frontend/core/components/Steps/Steps';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
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
      <Steps>
        <UsernameForm isCheckIfNotExists={isCheckIfNotExists} />

        <OtpForm />
      </Steps>
    </Wrapper>
  );
};

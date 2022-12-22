import type { SignInPropsModel } from '@lib/frontend/auth/containers/SignIn/SignIn.models';
import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const SignIn: SFCModel<SignInPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      p
      style={styles}
      testID={testID}>
      <SignInForm />
    </Wrapper>
  );
};

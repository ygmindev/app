import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import type { SignInPagePropsModel } from '@lib/frontend/auth/pages/SignInPage/SignInPage.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';

export const SignInPage: SFCModel<SignInPagePropsModel> = ({
  method = SIGN_IN_METHOD.EMAIL_OR_PHONE,
  mode,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <CenterLayout
      style={styles}
      testID={testID}>
      <SignInForm
        method={method}
        mode={mode}
      />
    </CenterLayout>
  );
};

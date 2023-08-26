import { SignInForm } from '#lib-frontend/auth/containers/SignInForm/SignInForm';
import {
  type SignInPageParamsModel,
  type SignInPagePropsModel,
} from '#lib-frontend/auth/pages/SignInPage/SignInPage.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const SignInPage: SFCModel<SignInPagePropsModel> = ({ method, mode, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { location } = useRouter<SignInPageParamsModel>();
  return (
    <SignInForm
      method={method}
      mode={mode}
      redirectTo={location.params?.redirectTo}
      style={styles}
      testID={testID}
    />
  );
};

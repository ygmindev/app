import { SignInForm } from '#lib-frontend/auth/containers/SignInForm/SignInForm';
import {
  type SignInPageParamsModel,
  type SignInPagePropsModel,
} from '#lib-frontend/auth/pages/SignInPage/SignInPage.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { FORM_MODE } from '#lib-shared/form/form.constants';

export const SignInPage: SFCModel<SignInPagePropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  ...props
}) => {
  const { location } = useRouter<SignInPageParamsModel>();
  return (
    <SignInForm
      {...props}
      method={method}
      mode={mode}
      redirectTo={location.params?.redirectTo}
    />
  );
};

import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import {
  type SignInPageParamsModel,
  type SignInPagePropsModel,
} from '@lib/frontend/auth/pages/SignInPage/SignInPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FORM_MODE } from '@lib/shared/data/data.constants';

export const SignInPage: LFCModel<SignInPagePropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  redirectTo,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<SignInPageParamsModel>();
  return (
    <SignInForm
      {...wrapperProps}
      method={method}
      mode={mode}
      redirectTo={redirectTo ?? location.params?.redirectTo}
      successMessage={mode === FORM_MODE.UPDATE ? t('core:success', { value: method }) : undefined}
    />
  );
};

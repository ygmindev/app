import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import { type SignInPagePropsModel } from '@lib/frontend/auth/pages/SignInPage/SignInPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FORM_MODE } from '@lib/shared/data/data.constants';
import { phoneNumber } from '@lib/shared/locale/utils/phoneNumber/phoneNumber';

export const SignInPage: LFCModel<SignInPagePropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      flex
      isFullHeight>
      <SignInForm
        method={method}
        mode={mode}
        successMessage={(values) =>
          mode === FORM_MODE.UPDATE
            ? { description: t('core:success', { value: method }) }
            : {
                description: t('core:welcomeBack', {
                  value:
                    values?.email ??
                    (values?.phone &&
                      phoneNumber.format({
                        callingCode: values?.callingCode,
                        phone: values.phone,
                      })),
                }),
              }
        }
      />
    </MainLayout>
  );
};

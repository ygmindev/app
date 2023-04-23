import { USERNAME_FORM_VALIDATORS } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import type {
  UsernameFormModel,
  UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { FormContainerFieldModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { CountryField } from '@lib/frontend/locale/components/CountryField/CountryField';
import { COUNTRY_FIELD_MIN_WIDTH } from '@lib/frontend/locale/components/CountryField/CountryField.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { PhoneField } from '@lib/frontend/user/components/PhoneField/PhoneField';
import { USERNAME_METHOD } from '@lib/shared/auth/auth.constants';
import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { pick } from '@lib/shared/core/utils/pick/pick';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';

export const UsernameForm: SFCModel<UsernameFormPropsModel> = ({
  isCheckIfNotExists,
  method = USERNAME_METHOD.PHONE,
  onComplete,
  onSubmit,
  onSuccess,
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { create, createIfNotExists } = useOtpResource();

  const _handleSubmit = async (data: UsernameFormModel): Promise<OtpModel | null> => {
    onSubmit && (await onSubmit(data));
    const { result } = await (isCheckIfNotExists ? createIfNotExists : create)({
      form: pick({ keys: ['countryCode', 'phone', 'email'], value: data }),
    });
    return result || null;
  };

  const _fields: Array<FormContainerFieldModel> = (() => {
    switch (method) {
      case USERNAME_METHOD.EMAIL:
        return [
          {
            field: FORM_FIELD_TYPE.TEXT_FIELD,
            fieldProps: {
              autoComplete: 'email',
              icon: 'email',
              isAutoFocus: true,
              label: ({ t }) => t('user:labels.email'),
            },
            id: 'email',
          },
        ];
      case USERNAME_METHOD.PHONE:
        return [
          { Component: CountryField, id: 'countryCode', width: COUNTRY_FIELD_MIN_WIDTH },
          { Component: PhoneField, id: 'phone' },
        ];
      default:
        return [];
    }
  })();

  return (
    <CenterLayout
      style={styles}
      testID={testID}>
      <FormContainer
        errorContextGet={(e) =>
          isCheckIfNotExists && (e as HttpError).statusCode === HTTP_STATUS_CODE.CONFLICT
            ? { icon: 'people', message: t('auth:messages.userExistsError') }
            : undefined
        }
        onComplete={onComplete}
        onSubmit={_handleSubmit}
        onSuccess={onSuccess}
        rows={[{ fields: _fields, id: 'username' }]}
        validators={USERNAME_FORM_VALIDATORS}
      />
    </CenterLayout>
  );
};

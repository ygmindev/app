import {
  USERNAME_FORM_FIELDS,
  USERNAME_FORM_VALIDATORS,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import type {
  UsernameFormModel,
  UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';

export const UsernameForm: SFCModel<UsernameFormPropsModel> = ({
  isCheckIfNotExists,
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
      form: { username: data.username },
    });
    return result || null;
  };

  return (
    <CenterLayout
      style={styles}
      testID={testID}>
      <FormContainer
        getError={(e) =>
          isCheckIfNotExists && isTypeOf(e, DuplicateError)
            ? { icon: 'people', message: t('auth:messages.userExistsError') }
            : undefined
        }
        onComplete={onComplete}
        onSubmit={_handleSubmit}
        onSuccess={onSuccess}
        rows={USERNAME_FORM_FIELDS}
        validators={USERNAME_FORM_VALIDATORS}
      />
    </CenterLayout>
  );
};

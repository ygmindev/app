import { USER_EXISTS_ALERT } from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import {
  USERNAME_FORM_FIELDS,
  USERNAME_FORM_VALIDATORS,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import type {
  UsernameFormModel,
  UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';

export const UsernameForm: SFCModel<UsernameFormPropsModel> = ({
  isCheckIfNotExists,
  onSuccess,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { alertAdd } = useAlert();

  const { create, createIfNotExists } = useOtpResource();

  const _handleSubmit = async (data: UsernameFormModel): Promise<void> => {
    try {
      const { result } = await (isCheckIfNotExists ? createIfNotExists : create)({
        form: { username: data.username },
      });
      result && onSuccess && (await onSuccess(result, data));
    } catch (e) {
      if (isCheckIfNotExists && isTypeOf(e, DuplicateError)) {
        return alertAdd(USER_EXISTS_ALERT);
      }
      throw e;
    }
  };

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <CenterLayout>
        <FormContainer
          isFullWidth
          onSubmit={_handleSubmit}
          rows={USERNAME_FORM_FIELDS}
          validators={USERNAME_FORM_VALIDATORS}
        />
      </CenterLayout>
    </Wrapper>
  );
};

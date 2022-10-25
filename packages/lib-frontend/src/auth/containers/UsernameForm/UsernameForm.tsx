import {
  USERNAME_FORM_FIELDS,
  USERNAME_FORM_TEST_ID,
  USERNAME_FORM_VALIDATORS,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import type {
  UsernameFormModel,
  UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';
import { USER } from '@lib/shared/user/user.constants';

export const UsernameForm: SFCModel<UsernameFormPropsModel> = ({
  isCheckIfNotExists,
  onSuccess,
  testID,
  ...props
}) => {
  useTranslation([USER]);

  const { styles } = useStyles({ props });
  const { error } = useNotification();

  const { create, createIfNotExists } = useOtpResource();

  const _handleSubmit = async (data: UsernameFormModel): Promise<void> => {
    try {
      const { result } = await (isCheckIfNotExists ? createIfNotExists : create)({
        form: { username: data.username },
      });
      result && onSuccess && (await onSuccess(data, result));
    } catch (e) {
      if (isCheckIfNotExists && isTypeOf(e, DuplicateError)) {
        return error({ icon: ICON.people, message: ({ t }) => t('auth:messages.userExistsError') });
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
          onSubmit={_handleSubmit}
          rows={USERNAME_FORM_FIELDS}
          testID={USERNAME_FORM_TEST_ID}
          validators={USERNAME_FORM_VALIDATORS}
        />
      </CenterLayout>
    </Wrapper>
  );
};

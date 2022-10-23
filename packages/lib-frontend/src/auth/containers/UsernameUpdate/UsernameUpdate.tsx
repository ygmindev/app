import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import type { UsernameUpdatePropsModel } from '@lib/frontend/auth/containers/UsernameUpdate/UsernameUpdate.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { USERNAME_UPDATE } from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import type { SignInFormModel, SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const UsernameUpdate: SFCModel<UsernameUpdatePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { success } = useNotification();

  const { query: usernameUpdate } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    SignInModel,
    SignInFormModel
  >({
    fields: [{ result: ['token', { user: ['_id'] }] }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: USERNAME_UPDATE,
  });

  return (
    <Wrapper
      grow
      p
      style={styles}
      testID={testID}>
      <SignInForm
        isCheckIfNotExists
        // onSubmit={async (form) => {
        //   await usernameUpdate({ form });
        //   // await up();
        //   return add({
        //     message: t('core:messages.updated', { value: t(form.username) }),
        //   });
        // }}
      />
    </Wrapper>
  );
};

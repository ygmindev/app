import type { SFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { NAME_FORM_CONTAINER_PROPS } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.constants';
import type { NameFormPagePropsModel } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';

export const NameFormPage: SFCModel<NameFormPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const currentUser = useCurrentUser();
  const { update } = useUserResource();
  const actions = useActions();
  const { success } = useNotification();

  return currentUser ? (
    <FormContainer
      initialValues={{ first: currentUser.first, last: currentUser.last }}
      onSubmit={async ({ first, last }) => {
        const { result } = await update({
          filter: { _id: currentUser._id },
          update: { first, last },
        });
        actions?.user.currentUserUpdate(result);
        success({ message: t('core:messages.updateSuccess', { value: t('user:labels.name') }) });
      }}
      style={styles}
      testID={testID}
      {...NAME_FORM_CONTAINER_PROPS}
    />
  ) : null;
};

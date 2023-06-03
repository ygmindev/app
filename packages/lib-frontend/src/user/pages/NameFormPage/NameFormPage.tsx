import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { NAME_FORM_CONTAINER_PROPS } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.constants';
import type { NameFormPagePropsModel } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export const NameFormPage: SFCModel<NameFormPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const actions = useActions();
  const currentUser = useCurrentUser();
  const { replace } = useRouter();
  const { update } = useUserResource();

  const handleBack = async (): Promise<void> => replace({ pathname: `/${ACCOUNT}/${PERSONAL}` });

  const tName = t('user:labels.name');

  return currentUser ? (
    <CenterLayout>
      <FormContainer
        initialValues={{ first: currentUser.first, last: currentUser.last }}
        onCancel={handleBack}
        onSubmit={async ({ first, last }) => {
          const { result } = await update({
            filter: { _id: currentUser._id },
            update: { first, last },
          });
          actions?.user.currentUserUpdate(result);
          handleBack();
        }}
        style={styles}
        successMessage={t('core:messages.updateSuccess', { value: tName })}
        testID={testID}
        {...NAME_FORM_CONTAINER_PROPS}
      />
    </CenterLayout>
  ) : null;
};

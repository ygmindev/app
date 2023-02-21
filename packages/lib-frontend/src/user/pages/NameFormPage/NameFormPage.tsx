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
import { ACCOUNT } from '@lib/frontend/user/user.constants';
import { SETTINGS } from '@lib/shared/settings/settings.constants';

export const NameFormPage: SFCModel<NameFormPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const actions = useActions();
  const { replace } = useRouter();
  const currentUser = useCurrentUser();
  const { update } = useUserResource();

  return currentUser ? (
    <CenterLayout>
      <FormContainer
        initialValues={{ first: currentUser.first, last: currentUser.last }}
        onSubmit={async ({ first, last }) => {
          const { result } = await update({
            filter: { _id: currentUser._id },
            update: { first, last },
          });
          actions?.user.currentUserUpdate(result);
          replace({ pathname: `/${SETTINGS}/${ACCOUNT}` });
        }}
        style={styles}
        successMessage={t('settings:messages.updateSuccess', { value: t('user:labels.name') })}
        testID={testID}
        {...NAME_FORM_CONTAINER_PROPS}
      />
    </CenterLayout>
  ) : null;
};

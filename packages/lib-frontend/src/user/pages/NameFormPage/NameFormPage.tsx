import { useSignInResource } from '#lib-frontend/auth/hooks/useSignInResource/useSignInResource';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { FORM_PROPERTY_TYPE } from '#lib-frontend/data/components/FormContainer/FormContainer.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  type NameFormModel,
  type NameFormPagePropsModel,
} from '#lib-frontend/user/pages/NameFormPage/NameFormPage.models';
import { PERSONAL } from '#lib-frontend/user/user.constants';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const NameFormPage: SFCModel<NameFormPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const currentUser = useCurrentUser();
  const { replace } = useRouter();
  const { userUpdate } = useSignInResource();

  const handleBack = (): void => {
    void replace({ pathname: `/${ACCOUNT}/${PERSONAL}` });
  };

  const tName = t('user:name');

  return currentUser ? (
    <FormContainer
      initialValues={{ first: currentUser.first, last: currentUser.last }}
      onCancel={handleBack}
      onSubmit={async ({ first, last }: NameFormModel) => {
        await userUpdate({
          filter: [{ field: '_id', value: currentUser._id }],
          update: { first, last },
        });
        handleBack();
      }}
      rows={[
        {
          fields: [
            {
              field: FORM_PROPERTY_TYPE.TEXT_FIELD,
              fieldProps: { isAutoFocus: true, label: ({ t }) => t('user:first') },
              id: 'first',
            },
            {
              field: FORM_PROPERTY_TYPE.TEXT_FIELD,
              fieldProps: { label: ({ t }) => t('user:last') },
              id: 'last',
            },
          ],
          id: 'row',
        },
      ]}
      style={styles}
      successMessage={t('core:updateSuccess', { value: tName })}
      testID={testID}
    />
  ) : null;
};

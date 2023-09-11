import { useSignInResource } from '#lib-frontend/auth/hooks/useSignInResource/useSignInResource';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
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

  return currentUser ? (
    <FormContainer
      fields={[
        {
          element: (
            <TextField
              isAutoFocus
              label={t('user:first')}
            />
          ),
          id: 'first',
        },
        {
          element: <TextField label={t('user:last')} />,
          id: 'last',
        },
      ]}
      initialValues={{ first: currentUser.first, last: currentUser.last }}
      onCancel={handleBack}
      onSubmit={async ({ first, last }: NameFormModel) => {
        await userUpdate({
          filter: [{ field: '_id', value: currentUser._id }],
          update: { first, last },
        });
        handleBack();
      }}
      style={styles}
      testID={testID}
    />
  ) : null;
};

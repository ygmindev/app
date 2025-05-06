import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  type NameFormModel,
  type NameFormPagePropsModel,
} from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';

export const NameFormPage: LFCModel<NameFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { back } = useRouter();
  // const { userUpdate } = useSignInResource();
  return currentUser ? (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          fields: [
            {
              element: <TextInput label={t('user:first')} />,
              id: 'first',
            },
            {
              element: <TextInput label={t('user:last')} />,
              id: 'last',
            },
          ],
          id: 'name',
        },
      ]}
      initialValues={{ first: currentUser.first, last: currentUser.last }}
      onCancel={back}
      onSubmit={async ({ first, last }: NameFormModel) => {
        // userUpdate({
        //   filter: [{ field: '_id', stringValue: currentUser._id }],
        //   update: { first, last },
        // })
      }}
      p
      successMessage={t('core:updatedSuccess', { value: t('user:name') })}
    />
  ) : null;
};

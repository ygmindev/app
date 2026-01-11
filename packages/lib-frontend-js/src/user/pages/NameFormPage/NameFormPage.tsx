import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormContainerRefModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  type NameFormModel,
  type NameFormPagePropsModel,
} from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';
import { useRef } from 'react';

export const NameFormPage: LFCModel<NameFormPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { userUpdate } = useSignInResource();
  const initialValues = { first: currentUser?.first, last: currentUser?.last };
  const ref = useRef<FormContainerRefModel<NameFormModel>>(null);
  return (
    <MainLayout {...wrapperProps}>
      <Tile title={t('user:name')}>
        <FormContainer
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
          initialValues={initialValues}
          onCancel={() => ref.current?.reset?.()}
          onSubmit={async ({ first, last }: NameFormModel) =>
            userUpdate({ id: currentUser?._id, update: { first, last } })
          }
          ref={ref}
          submitLabel={t('core:save')}
          successMessage={() => ({
            description: t('core:updatedSuccess', { value: t('user:name') }),
          })}
        />
      </Tile>
    </MainLayout>
  );
};

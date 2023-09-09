import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type PersonalPagePropsModel } from '#lib-frontend/user/pages/PersonalPage/PersonalPage.models';
import { EMAIL, NAME, PHONE } from '#lib-frontend/user/user.constants';
import { phoneFormat } from '#lib-shared/locale/utils/phoneFormat/phoneFormat';

export const PersonalPage: SFCModel<PersonalPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const currentUser = useStore((state) => state.user.currentUser);
  return (
    <MainLayout
      style={styles}
      testID={testID}>
      <RouteGroup
        label={({ t }) => t('user:personal')}
        root
        routes={[
          {
            _id: NAME,
            icon: 'id',
            label: ({ t }) => t('user:name'),
            value:
              currentUser && (currentUser.first || currentUser.last)
                ? `${currentUser.first || ''} ${currentUser.last || ''}`
                : null,
          },
          {
            _id: PHONE,
            icon: 'phone',
            label: ({ t }) => t('user:phone'),
            value:
              currentUser && currentUser.callingCode && currentUser.phone
                ? phoneFormat(`+${currentUser.callingCode}${currentUser.phone}`)
                : null,
          },
          {
            _id: EMAIL,
            icon: 'email',
            label: ({ t }) => t('user:email'),
            value: currentUser?.email ?? null,
          },
        ]}
      />
    </MainLayout>
  );
};

import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type PersonalPagePropsModel } from '#lib-frontend/user/pages/PersonalPage/PersonalPage.models';
import { EMAIL, NAME, PHONE } from '#lib-frontend/user/user.constants';
import { phoneFormat } from '#lib-shared/locale/utils/phoneFormat/phoneFormat';

export const PersonalPage: LFCModel<PersonalPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  return (
    <MainLayout
      {...wrapperProps}
      p>
      <RouteGroup
        root
        routes={[
          {
            icon: 'id',
            id: NAME,
            label: ({ t }) => t('user:name'),
            value:
              currentUser && (currentUser.first || currentUser.last)
                ? `${currentUser.first || ''} ${currentUser.last || ''}`
                : undefined,
          },
          {
            icon: 'phone',
            id: PHONE,
            label: ({ t }) => t('user:phone'),
            value:
              currentUser && currentUser.callingCode && currentUser.phone
                ? phoneFormat(`+${currentUser.callingCode}${currentUser.phone}`)
                : undefined,
          },
          {
            icon: 'email',
            id: EMAIL,
            label: ({ t }) => t('user:email'),
            value: currentUser?.email ?? undefined,
          },
        ]}
        title={({ t }) => t('user:personal')}
      />
    </MainLayout>
  );
};

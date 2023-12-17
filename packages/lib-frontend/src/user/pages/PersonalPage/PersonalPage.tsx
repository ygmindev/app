import { type LFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RouteList } from '#lib-frontend/route/components/RouteList/RouteList';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type PersonalPagePropsModel } from '#lib-frontend/user/pages/PersonalPage/PersonalPage.models';
import { EMAIL, NAME, PHONE } from '#lib-frontend/user/user.constants';
import { phoneFormat } from '#lib-shared/locale/utils/phoneFormat/phoneFormat';

export const PersonalPage: LFCModel<PersonalPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const currentUser = useCurrentUser();
  return (
    <RouteList
      {...wrapperProps}
      p
      root
      routes={[
        {
          description:
            currentUser && (currentUser.first || currentUser.last)
              ? `${currentUser.first ?? ''} ${currentUser.last ?? ''}`
              : t('core:notSet'),
          icon: 'id',
          pathname: NAME,
          title: ({ t }) => t('user:name'),
        },
        {
          description:
            currentUser && currentUser.callingCode && currentUser.phone
              ? phoneFormat(`+${currentUser.callingCode}${currentUser.phone}`)
              : undefined,
          icon: 'phone',
          pathname: PHONE,
          title: ({ t }) => t('user:phone'),
        },
        {
          description: currentUser?.email ?? undefined,
          icon: 'email',
          pathname: EMAIL,
          title: ({ t }) => t('user:email'),
        },
      ]}
      title={({ t }) => t('user:personal')}
    />
  );
};

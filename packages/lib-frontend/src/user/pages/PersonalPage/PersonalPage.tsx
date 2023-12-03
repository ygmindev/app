import { type LFCModel } from '#lib-frontend/core/core.models';
import { RouteList } from '#lib-frontend/route/components/RouteList/RouteList';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type PersonalPagePropsModel } from '#lib-frontend/user/pages/PersonalPage/PersonalPage.models';
import { EMAIL, NAME, PHONE } from '#lib-frontend/user/user.constants';

export const PersonalPage: LFCModel<PersonalPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  return (
    <RouteList
      {...wrapperProps}
      root
      routes={[
        {
          icon: 'id',
          pathname: NAME,
          title: ({ t }) => t('user:name'),
          // value:
          //   currentUser && (currentUser.first || currentUser.last)
          //     ? `${currentUser.first || ''} ${currentUser.last || ''}`
          //     : undefined,
        },
        {
          icon: 'phone',
          pathname: PHONE,
          title: ({ t }) => t('user:phone'),
          // value:
          //   currentUser && currentUser.callingCode && currentUser.phone
          //     ? phoneFormat(`+${currentUser.callingCode}${currentUser.phone}`)
          //     : undefined,
        },
        {
          icon: 'email',
          pathname: EMAIL,
          title: ({ t }) => t('user:email'),
          // value: currentUser?.email ?? undefined,
        },
      ]}
      title={({ t }) => t('user:personal')}
    />
  );
};

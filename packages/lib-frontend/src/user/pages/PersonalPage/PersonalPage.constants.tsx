import { type RouteGroupModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { EMAIL, NAME, PERSONAL, PHONE } from '#lib-frontend/user/user.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { phoneFormat } from '#lib-shared/locale/utils/phoneFormat/phoneFormat';

export const PERSONAL_GROUPS: Array<RouteGroupModel> = withId([
  {
    id: PERSONAL,
    label: ({ t }) => t('user:personal'),
    options: [
      {
        icon: 'id',
        id: NAME,
        label: ({ t }) => t('user:name'),
        value: (state) => {
          const { currentUser } = state.user;
          return currentUser && (currentUser.first || currentUser.last)
            ? `${currentUser.first || ''} ${currentUser.last || ''}`
            : null;
        },
      },
      {
        icon: 'phone',
        id: PHONE,
        label: ({ t }) => t('user:phone'),
        value: (state) => {
          const { currentUser } = state.user;
          return currentUser && currentUser.callingCode && currentUser.phone
            ? phoneFormat(`+${currentUser.callingCode}${currentUser.phone}`)
            : null;
        },
      },
      {
        icon: 'email',
        id: EMAIL,
        label: ({ t }) => t('user:email'),
        value: (state) => {
          const { currentUser } = state.user;
          return currentUser?.email ?? null;
        },
      },
    ],
  },
]) as Array<RouteGroupModel>;

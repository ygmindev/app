import type { RouteGroupModel } from '@lib/frontend/route/components/RouteGroup/RouteGroup.models';
import { EMAIL, NAME, PERSONAL, PHONE } from '@lib/frontend/user/user.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { phoneFormat } from '@lib/shared/format/utils/phoneFormat/phoneFormat';

export const PERSONAL_GROUPS: Array<RouteGroupModel> = withId([
  {
    id: PERSONAL,
    label: ({ t }) => t('account:labels.personal'),
    options: [
      {
        icon: 'id',
        id: NAME,
        label: ({ t }) => t('user:labels.name'),
        value: (state) => {
          const _currentUser = state.user.currentUser;
          return _currentUser && (_currentUser.first || _currentUser.last)
            ? `${_currentUser.first || ''} ${_currentUser.last || ''}`
            : null;
        },
      },
      {
        icon: 'phone',
        id: PHONE,
        label: ({ t }) => t('core:labels.phone'),
        value: (state) => {
          const _currentUser = state.user.currentUser;
          return _currentUser && _currentUser.countryCode && _currentUser.phone
            ? phoneFormat(`+${_currentUser.countryCode}${_currentUser.phone}`)
            : null;
        },
      },
      {
        icon: 'email',
        id: EMAIL,
        label: ({ t }) => t('user:labels.email'),
        value: (state) => {
          const _currentUser = state.user.currentUser;
          return _currentUser?.email ?? null;
        },
      },
    ],
  },
]) as Array<RouteGroupModel>;

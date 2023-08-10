import { FORM } from '#lib-frontend/form/form.constants';
import { LOCATION, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { APPEARANCE, SETTINGS } from '#lib-frontend/settings/settings.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdResultModel } from '#lib-shared/core/utils/withId/withId.models';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const SETTINGS_GROUPS: WithIdResultModel<Array<RouteGroupPropsModel>> = withId([
  {
    id: APPEARANCE,
    label: ({ t }) => t('settings:appearance'),
    root: `${FORM}/${ACCOUNT}/${SETTINGS}`,
    routes: [
      {
        icon: 'brightness',
        id: BRIGHTNESS,
        label: ({ t }) => t('settings:brightness'),
      },
    ],
  },
  {
    id: LOCATION,
    label: ({ t }) => t('locale:location'),
    root: `${FORM}/${ACCOUNT}/${SETTINGS}`,
    routes: [
      {
        icon: 'time',
        id: TIMEZONE,
        label: ({ t }) => t('locale:timezone'),
      },
    ],
  },
]);

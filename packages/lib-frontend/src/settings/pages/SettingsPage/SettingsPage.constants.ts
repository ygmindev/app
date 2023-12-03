import { LOCATION, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { type RouteListPropsModel } from '#lib-frontend/route/components/RouteList/RouteList.models';
import { APPEARANCE } from '#lib-frontend/settings/settings.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdResultModel } from '#lib-shared/core/utils/withId/withId.models';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';

export const SETTINGS_GROUPS = withId([
  {
    id: APPEARANCE,
    routes: [
      {
        icon: 'brightness',
        pathname: BRIGHTNESS,
        title: ({ t }) => t('settings:brightness'),
      },
    ],
    title: ({ t }) => t('settings:appearance'),
  },
  {
    id: LOCATION,
    routes: [
      {
        icon: 'time',
        pathname: TIMEZONE,
        title: ({ t }) => t('locale:timezone'),
      },
    ],
    title: ({ t }) => t('locale:location'),
  },
]) satisfies WithIdResultModel<Array<RouteListPropsModel>>;

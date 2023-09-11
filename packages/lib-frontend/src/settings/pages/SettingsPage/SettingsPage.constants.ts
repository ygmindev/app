import { LOCATION, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { APPEARANCE } from '#lib-frontend/settings/settings.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdResultModel } from '#lib-shared/core/utils/withId/withId.models';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';

export const SETTINGS_GROUPS = withId([
  {
    id: APPEARANCE,
    label: ({ t }) => t('settings:appearance'),
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
    routes: [
      {
        icon: 'time',
        id: TIMEZONE,
        label: ({ t }) => t('locale:timezone'),
      },
    ],
  },
]) satisfies WithIdResultModel<Array<RouteGroupPropsModel>>;

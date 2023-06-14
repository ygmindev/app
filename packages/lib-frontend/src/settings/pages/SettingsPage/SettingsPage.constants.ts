import { LOCATION, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import type { RouteGroupModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { APPEARANCE } from '#lib-frontend/settings/settings.constants';
import { withId } from '#lib-shared/core/decorators/withId/withId';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';

export const SETTINGS_GROUPS: Array<RouteGroupModel> = withId([
  {
    id: APPEARANCE,
    label: ({ t }) => t('settings:labels.appearance'),
    options: [
      {
        icon: 'brightness',
        id: BRIGHTNESS,
        label: ({ t }) => t('settings:labels.brightness'),
      },
    ],
  },
  {
    id: LOCATION,
    label: ({ t }) => t('locale:labels.location'),
    options: [
      {
        icon: 'time',
        id: TIMEZONE,
        label: ({ t }) => t('locale:labels.timezone'),
      },
    ],
  },
]);

import { LOCATION, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { APPEARANCE } from '#lib-frontend/settings/settings.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdResultModel } from '#lib-shared/core/utils/withId/withId.models';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';

export const SETTINGS_GROUPS = withId([
  {
    _id: APPEARANCE,
    label: ({ t }) => t('settings:appearance'),
    routes: [
      {
        _id: BRIGHTNESS,
        icon: 'brightness',
        label: ({ t }) => t('settings:brightness'),
      },
    ],
  },
  {
    _id: LOCATION,
    label: ({ t }) => t('locale:location'),
    routes: [
      {
        _id: TIMEZONE,
        icon: 'time',
        label: ({ t }) => t('locale:timezone'),
      },
    ],
  },
]) satisfies WithIdResultModel<Array<RouteGroupPropsModel>>;

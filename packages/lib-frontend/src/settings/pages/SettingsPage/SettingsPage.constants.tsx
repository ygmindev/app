import { LANGUAGE, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { TimezoneFormPage } from '#lib-frontend/locale/pages/TimezoneFormPage/TimezoneFormPage';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { APPEARANCE } from '#lib-frontend/settings/settings.constants';
import { BrightnessFormPage } from '#lib-frontend/style/pages/BrightnessFormPage/BrightnessFormPage';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';

export const SETTINGS_PAGE_ROUTES = [
  {
    pathname: APPEARANCE,
    routes: [
      {
        element: <BrightnessFormPage />,
        icon: 'brightness',
        pathname: BRIGHTNESS,
        title: ({ t }) => t('settings:brightness'),
      },
    ],
    title: ({ t }) => t('settings:appearance'),
  },
  {
    pathname: LOCALE,
    routes: [
      {
        icon: 'globe',
        pathname: LANGUAGE,
        title: ({ t }) => t('locale:language'),
      },
      {
        element: <TimezoneFormPage />,
        icon: 'time',
        pathname: TIMEZONE,
        title: ({ t }) => t('locale:timezone'),
      },
    ],
    title: ({ t }) => t('locale:location'),
  },
] satisfies Array<RouteModel>;

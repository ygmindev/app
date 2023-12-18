import { LANGUAGE, TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { TimezoneFormPage } from '#lib-frontend/locale/pages/TimezoneFormPage/TimezoneFormPage';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { AppearanceSettingsPage } from '#lib-frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage';
import { APPEARANCE } from '#lib-frontend/settings/settings.constants';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const settingRoutes = [
  {
    element: <AppearanceSettingsPage />,
    icon: 'eye',
    pathname: APPEARANCE,
    title: ({ t }) => t('settings:appearance'),
  },
  {
    icon: 'globe',
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

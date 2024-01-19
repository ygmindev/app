import { LocaleSettingsPage } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { AppearanceSettingsPage } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage';
import { APPEARANCE } from '@lib/frontend/settings/settings.constants';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const settingsRoutes = [
  {
    element: <AppearanceSettingsPage />,
    icon: 'eye',
    pathname: APPEARANCE,
    title: ({ t }) => t('settings:appearance'),
  },
  {
    element: <LocaleSettingsPage />,
    icon: 'globe',
    pathname: LOCALE,
    title: ({ t }) => t('locale:location'),
  },
] satisfies Array<RouteModel>;

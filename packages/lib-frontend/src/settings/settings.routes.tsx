import { NAVIGATION_TYPE } from '@lib/frontend/routing/components/Page/Page.constants';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { Settings } from '@lib/frontend/settings/containers/Settings/Settings';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';

export const settingsRoutes: Array<PageModel> = [
  {
    element: <Settings />,
    navigation: NAVIGATION_TYPE.PATH,
    pathname: SETTINGS,
  },
];

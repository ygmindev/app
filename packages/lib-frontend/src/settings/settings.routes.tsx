import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';
import { Settings } from '@lib/frontend/settings/containers/Settings/Settings';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';

export const settingsRoutes: Array<PagePropsModel> = [
  {
    element: <Settings />,
    pathname: SETTINGS,
  },
];

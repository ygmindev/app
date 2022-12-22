import type { PagePropsModel } from '@lib/frontend/route/components/Page/Page.models';
import { Settings } from '@lib/frontend/settings/containers/Settings/Settings';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';

export const settingsRoutes: Array<PagePropsModel> = [
  {
    element: <Settings />,
    isHeader: true,
    pathname: SETTINGS,
    title: SETTINGS,
  },
];

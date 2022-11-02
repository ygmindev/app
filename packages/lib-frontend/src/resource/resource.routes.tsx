import { Resource } from '@lib/frontend/admin/containers/Resource/Resource';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { RESOURCE } from '@lib/shared/resource/resource.constants';

export const resourceRoutes: Array<PageModel> = [
  {
    element: <Resource />,
    pathname: `${RESOURCE}/:name`,
  },
];

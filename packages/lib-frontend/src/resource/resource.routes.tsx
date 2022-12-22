import { Resource } from '@lib/frontend/admin/containers/Resource/Resource';
import type { PagePropsModel } from '@lib/frontend/route/components/Page/Page.models';
import { RESOURCE } from '@lib/shared/resource/resource.constants';

export const resourceRoutes: Array<PagePropsModel> = [
  {
    element: <Resource />,
    pathname: `${RESOURCE}/:name`,
  },
];

import { Scratchpad } from '@lib/frontend/dev/containers/Scratchpad/Scratchpad';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';

export const devRoutes: Array<PageModel> = [
  process.env.NODE_ENV === 'development' && {
    element: <Scratchpad />,
    pathname: 'scratchpad',
  },
].filter(Boolean) as Array<PageModel>;

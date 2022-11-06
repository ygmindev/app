import { Scratchpad } from '@lib/frontend/dev/containers/Scratchpad/Scratchpad';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';

export const devRoutes: Array<PagePropsModel> = [
  process.env.NODE_ENV === 'development' && {
    element: <Scratchpad />,
    pathname: 'scratchpad',
  },
].filter(Boolean) as Array<PagePropsModel>;

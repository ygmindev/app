import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type SitemapPagePropsModel = PagePropsModel & {
  routes: Array<RouteModel>;
};

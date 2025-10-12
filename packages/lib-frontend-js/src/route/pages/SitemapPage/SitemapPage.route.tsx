import { SITEMAP } from '@lib/frontend/app/app.constants';
import { SitemapPage } from '@lib/frontend/route/pages/SitemapPage/SitemapPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const sitemapRoute: RouteModel = {
  element: <SitemapPage />,
  pathname: SITEMAP,
};

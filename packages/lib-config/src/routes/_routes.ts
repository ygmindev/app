import { type _RoutesConfigModel, type RoutesConfigModel } from '@lib/config/routes/routes.models';

export const _routes = ({ routes }: RoutesConfigModel): _RoutesConfigModel =>
  routes.map((route) => ({
    element: route.element,
    index: route.pathname === '/' ? true : undefined,
    path: route.pathname,
    routes: route.routes?.length ? _routes({ routes: route.routes }) : undefined,
  }));

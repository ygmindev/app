import { type RouteModel } from '@lib/frontend/route/route.models';

export type _OnBeforePrerenderParamsModel = {
  routes: Array<RouteModel>;
};

export type _OnBeforePrerenderModel = () => Promise<
  Array<{
    pageContext?: Partial<Vike.PageContext & { data: unknown }>;
    url: string;
  }>
>;

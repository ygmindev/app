import { type InitializeParamsModel } from '@lib/backend/setup/utils/initialize/initialize.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type _OnBeforePrerenderParamsModel = InitializeParamsModel & {
  routes: Array<RouteModel>;
};

export type _OnBeforePrerenderModel = () => Promise<
  Array<{
    pageContext?: Partial<Vike.PageContext & { data: unknown }>;
    url: string;
  }>
>;

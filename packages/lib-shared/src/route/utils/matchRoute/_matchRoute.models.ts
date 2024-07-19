import { type RouteModel } from '@lib/frontend/route/route.models';

export type _MatchRouteParamsModel = [RouteModel | string, Array<RouteModel>];

export type _MatchRouteModel = RouteModel | null;

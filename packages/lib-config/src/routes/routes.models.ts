import { type RouteModel } from '@lib/frontend/route/route.models';
import { type RouteObject } from 'react-router';

export type RoutesConfigModel = {
  routes: Array<RouteModel>;
};

export type _RoutesConfigModel = Array<RouteObject>;

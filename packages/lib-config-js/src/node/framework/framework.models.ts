import { type RouteModel } from '@lib/frontend/route/route.models';
import { type Config } from 'vike/types';

export type FrameworkConfigModel = {
  routes: Array<RouteModel>;
};

export type _FrameworkConfigModel = Config;

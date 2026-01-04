import { type _OnBeforeClientModel } from '@lib/config/node/framework/onBeforeClient/_onBeforeClient.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type OnBeforeClientParamsModel = {
  routes: Array<RouteModel>;
};

export type OnBeforeClientModel = _OnBeforeClientModel;

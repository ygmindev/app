import { type _OnAfterServerModel } from '@lib/config/node/framework/onAfterServer/_onAfterServer.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type OnAfterServerParamsModel = {
  routes: Array<RouteModel>;
};

export type OnAfterServerModel = _OnAfterServerModel;

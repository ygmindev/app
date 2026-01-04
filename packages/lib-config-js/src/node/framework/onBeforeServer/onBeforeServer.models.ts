import { type InitializeParamsModel } from '@lib/backend/setup/utils/initialize/initialize.models';
import { type _OnBeforeServerModel } from '@lib/config/node/framework/onBeforeServer/_onBeforeServer.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type OnBeforeServerParamsModel = InitializeParamsModel & {
  routes: Array<RouteModel>;
};

export type OnBeforeServerModel = _OnBeforeServerModel;

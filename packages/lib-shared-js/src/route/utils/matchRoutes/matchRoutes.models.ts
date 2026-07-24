import { type RouteModel } from '@lib/frontend/route/route.models';
import {
  type _MatchRoutesModel,
  type _MatchRoutesParamsModel,
} from '@lib/shared/route/utils/matchRoutes/_matchRoutes.models';

export type MatchRoutesParamsModel = _MatchRoutesParamsModel;

export type MatchRoutesModel = _MatchRoutesModel;

export type MatchedRouteModel = {
  params?: Record<string, unknown>;
  route: RouteModel;
};

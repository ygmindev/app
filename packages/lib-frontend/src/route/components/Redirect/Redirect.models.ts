import { type LocationParamsModel, type RouteUpdateModel } from '#lib-frontend/route/route.models';

export type RedirectPropsModel<TType extends LocationParamsModel = LocationParamsModel> =
  RouteUpdateModel<TType>;

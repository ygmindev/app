import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import type { LocationModel, LocationParamsModel } from '#lib-frontend/route/route.models';

export type RouteLinkPropsModel<TParams extends LocationParamsModel = LocationParamsModel> =
  LocationModel<TParams> & ChildrenPropsModel<TranslatableTextModel>;

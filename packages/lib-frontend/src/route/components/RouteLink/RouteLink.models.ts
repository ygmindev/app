import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type LocationModel, type LocationParamsModel } from '#lib-frontend/route/route.models';

export type RouteLinkPropsModel<TType extends LocationParamsModel = LocationParamsModel> =
  LocationModel<TType> & ChildrenPropsModel<TranslatableTextModel>;

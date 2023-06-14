import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import type { LocationModel, LocationParamsModel } from '#lib-frontend/route/route.models';

export interface RouteLinkPropsModel<TParams extends LocationParamsModel = LocationParamsModel>
  extends LocationModel<TParams>,
    ChildrenPropsModel<TranslatableTextModel> {}

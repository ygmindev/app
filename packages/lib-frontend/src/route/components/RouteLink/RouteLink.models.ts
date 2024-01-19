import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type LocationModel } from '@lib/frontend/route/route.models';

export type RouteLinkPropsModel<TType = object> = LocationModel<TType> &
  ChildrenPropsModel<TranslatableTextModel>;

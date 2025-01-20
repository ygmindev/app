import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type LocationModel } from '@lib/frontend/route/route.models';

export type RouteLinkPropsModel<TType = object> = LocationModel<TType> &
  ChildrenPropsModel<AsyncTextModel>;

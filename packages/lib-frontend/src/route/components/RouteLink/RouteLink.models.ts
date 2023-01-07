import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { LocationModel } from '@lib/frontend/route/route.models';

export interface RouteLinkPropsModel<TParams = undefined>
  extends LocationModel<TParams>,
    ChildrenPropsModel<TranslatableTextModel> {}

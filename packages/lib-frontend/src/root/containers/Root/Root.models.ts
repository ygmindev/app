import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import type { InitialStateModel } from '@lib/shared/root/root.models';

export interface RootPropsModel extends ChildrenPropsModel {
  initialState?: InitialStateModel;
  location?: LocationModel;
}

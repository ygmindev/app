import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { InitialStateModel } from '@lib/shared/root/root.models';

export interface RootPropsModel extends ChildrenPropsModel {
  initialState?: InitialStateModel;
}

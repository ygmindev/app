import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { InitialStateModel } from '@lib/shared/root/root.models';

export interface RootPropsModel extends WithChildrenPropsModel {
  initialState?: InitialStateModel;
}

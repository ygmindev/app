import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { RootStateModel } from '@lib/frontend/root/stores/rootStore.models';

export interface RootPropsModel extends WithChildrenPropsModel {
  initialState?: RootStateModel;
}

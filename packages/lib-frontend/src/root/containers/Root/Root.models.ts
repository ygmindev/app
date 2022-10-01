import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { RootStateModel } from '@lib/frontend/root/stores/reducer/reducer.models';
import type { Store } from '@reduxjs/toolkit';

export interface RootPropsModel extends WithChildrenPropsModel {
  intialStore?: Store<RootStateModel>;
}

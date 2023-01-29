import type {
  ChildrenPropsModel,
  MeasureModel,
  PositionModel,
} from '@lib/frontend/core/core.models';
import type { StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _ViewPropsModel extends ChildrenPropsModel, StylePropsModel<ViewStyleModel> {
  isHorizontalScrollable?: boolean;
  isVerticalScrollable?: boolean;
  onMeasure?(measure: MeasureModel): void;
  onMouseEnter?: CallableModel;
  onMouseLeave?: CallableModel;
  onPress?: CallablePromiseModel | CallableModel;
  onPressIn?: CallableModel;
  onPressOut?: CallableModel;
  onResponderGrant?: CallableModel;
  onResponderRelease?: CallableModel;
  onScroll?(position: PositionModel): void;
}

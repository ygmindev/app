import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { MeasureModel, PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _ViewPropsModel extends WithChildrenPropsModel {
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
  style?: StyleModel;
}

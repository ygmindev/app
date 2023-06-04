import type {
  ChildrenPropsModel,
  MeasureModel,
  PositionModel,
} from '@lib/frontend/core/core.models';
import type { StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type {
  CallableArgsModel,
  CallableArgsPromiseModel,
  CallableModel,
} from '@lib/shared/core/core.models';
import type { ScrollView } from 'react-native';

export interface _ViewPropsModel extends ChildrenPropsModel, StylePropsModel<ViewStyleModel> {
  isFocusable?: boolean;
  isHorizontalScrollable?: boolean;
  isVerticalScrollable?: boolean;
  onMeasure?(measure: MeasureModel): void;
  onMouseEnter?: CallableModel;
  onMouseLeave?: CallableModel;
  onPress?: CallableArgsPromiseModel | CallableArgsModel;
  onPressIn?: CallableModel;
  onPressOut?: CallableModel;
  onResponderGrant?: CallableModel;
  onResponderRelease?: CallableModel;
  onScroll?(position: PositionModel): void;
}

export interface _ViewRefModel extends ScrollView {}

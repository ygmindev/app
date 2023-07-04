import { type ScrollView } from 'react-native';

import {
  type ChildrenPropsModel,
  type MeasureModel,
  type PositionModel,
} from '#lib-frontend/core/core.models';
import { type StylePropsModel, type ViewStyleModel } from '#lib-frontend/style/style.models';
import {
  type OptionalCallableModel,
  type OptionalCallablePromiseModel,
} from '#lib-shared/core/core.models';

export type _ViewPropsModel = {
  isFocusable?: boolean;
  isHidden?: boolean;
  isHorizontalScrollable?: boolean;
  isVerticalScrollable?: boolean;
  onMeasure?(measure: MeasureModel): void;
  onMouseEnter?: OptionalCallableModel;
  onMouseLeave?: OptionalCallableModel;
  onPress?: OptionalCallablePromiseModel | OptionalCallableModel;
  onPressIn?: OptionalCallableModel;
  onPressOut?: OptionalCallableModel;
  onResponderGrant?: OptionalCallableModel;
  onResponderRelease?: OptionalCallableModel;
  onScroll?(position: PositionModel): void;
} & ChildrenPropsModel &
  StylePropsModel<ViewStyleModel>;

export type _ViewRefModel = ScrollView;

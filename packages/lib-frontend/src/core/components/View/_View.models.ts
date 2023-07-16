import { type ScrollView } from 'react-native';

import {
  type ChildrenPropsModel,
  type MeasureModel,
  type PositionModel,
} from '#lib-frontend/core/core.models';
import { type StylePropsModel, type ViewStyleModel } from '#lib-frontend/style/style.models';

export type _ViewPropsModel = {
  isFocusable?: boolean;
  isHidden?: boolean;
  isHorizontalScrollable?: boolean;
  isVerticalScrollable?: boolean;
  onMeasure?(measure: MeasureModel): void;
  onMouseEnter?(): void;
  onMouseLeave?(): void;
  onPress?: (() => void) | (() => Promise<void>);
  onPressIn?(): void;
  onPressOut?(): void;
  onResponderGrant?(): void;
  onResponderRelease?(): void;
  onScroll?(position: PositionModel): void;
} & ChildrenPropsModel &
  StylePropsModel<ViewStyleModel>;

export type _ViewRefModel = ScrollView;

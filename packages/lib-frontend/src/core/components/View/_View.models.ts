import {
  type ChildrenPropsModel,
  type MeasureModel,
  type PositionModel,
} from '@lib/frontend/core/core.models';
import { type StylePropsModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type ScrollView } from 'react-native';

export type _ViewPropsModel = ChildrenPropsModel &
  StylePropsModel<ViewStyleModel> & {
    isFocusable?: boolean;
    isHidden?: boolean;
    isHorizontalScrollable?: boolean;
    isHorizontalScrollableVisible?: boolean;
    isVerticalScrollable?: boolean;
    isVerticalScrollableVisible?: boolean;
    onMeasure?(measure: MeasureModel): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
    onPress?: (() => void) | (() => Promise<void>);
    onPressIn?(): void;
    onPressOut?(): void;
    onResponderGrant?(): void;
    onResponderRelease?(): void;
    onScroll?(position: PositionModel): void;
  };

export type _ViewRefModel = ScrollView;

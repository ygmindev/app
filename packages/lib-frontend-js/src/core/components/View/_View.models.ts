import {
  type PointerEventsModel,
  type ScrollableViewRefModel,
  type ScrollTypeModel,
} from '@lib/frontend/core/components/View/View.models';
import {
  type ChildrenPropsModel,
  type MeasureModel,
  type PositionModel,
} from '@lib/frontend/core/core.models';
import { type StylePropsModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export type _ViewPropsModel = ChildrenPropsModel &
  StylePropsModel<ViewStyleModel> & {
    onPress?: (() => void) | (() => Promise<void>);
    isFocusable?: boolean;
    isHidden?: boolean;
    isHorizontalScrollable?: boolean;
    isHorizontalScrollableVisible?: boolean;
    isVerticalScrollable?: boolean;
    isVerticalScrollableVisible?: boolean;
    pointerEvents?: PointerEventsModel;
    scrollType?: ScrollTypeModel;
    tabIndex?: 0 | -1;
    onMeasure?(measure: MeasureModel): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
    onPressIn?(): void;
    onPressOut?(): void;
    onResponderGrant?(): void;
    onResponderRelease?(): void;
    onScroll?(position: PositionModel): void;
    onScrollEnd?(): void;
  };

export type _ViewRefModel = ScrollableViewRefModel;

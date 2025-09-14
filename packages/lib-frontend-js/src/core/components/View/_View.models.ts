import {
  type POINTER_EVENTS,
  type SCROLL_TYPE,
} from '@lib/frontend/core/components/View/View.constants';
import { type ScrollableViewRefModel } from '@lib/frontend/core/components/View/View.models';
import {
  type ChildrenPropsModel,
  type MeasureModel,
  type PositionModel,
} from '@lib/frontend/core/core.models';
import { type StylePropsModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export type _ViewPropsModel = ChildrenPropsModel &
  StylePropsModel<ViewStyleModel> & {
    isFocusable?: boolean;
    isHidden?: boolean;
    isHorizontalScrollable?: boolean;
    isHorizontalScrollableVisible?: boolean;
    isVerticalScrollable?: boolean;
    isVerticalScrollableVisible?: boolean;
    onPress?: (() => void) | (() => Promise<void>);
    pointerEvents?: POINTER_EVENTS;
    scrollType?: SCROLL_TYPE;
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

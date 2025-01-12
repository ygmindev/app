import { type ScrollTypeModel } from '@lib/frontend/core/components/View/View.models';
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
    onMeasure?(measure: MeasureModel): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
    onPress?: (() => void) | (() => Promise<void>);
    onPressIn?(): void;
    onPressOut?(): void;
    onResponderGrant?(): void;
    onResponderRelease?(): void;
    onScroll?(position: PositionModel): void;
    scrollType?: ScrollTypeModel;
  };

export type _ViewRefModel = {
  scrollTo(params: PositionModel): void;
};

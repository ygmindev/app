import { type POINTER_EVENTS } from '@lib/frontend/core/components/View/View.constants';
import { type ChildrenPropsModel, type MeasureModel } from '@lib/frontend/core/core.models';
import { type StylePropsModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export type _ViewPropsModel = ChildrenPropsModel &
  StylePropsModel<ViewStyleModel> & {
    isFocusable?: boolean;
    isHidden?: boolean;
    pointerEvents?: POINTER_EVENTS;
    tabIndex?: 0 | -1;
    onMeasure?(measure: MeasureModel): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
    onPressIn?(): void;
    onPressOut?(): void;
    onResponderGrant?(): void;
    onResponderRelease?(): void;
  };

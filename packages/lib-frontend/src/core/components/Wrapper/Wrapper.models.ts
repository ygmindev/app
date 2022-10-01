import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import type { WithAnimationPropsModel } from '@lib/frontend/core/decorators/withAnimationProps/withAnimationProps.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { MeasureModel, PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import type { SpacingModel } from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler.models';
import type { ViewStylerParamsModel } from '@lib/frontend/styling/utils/styler/viewStyler/viewStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface WrapperPropsModel
  extends WithTestIdModel,
    ViewStylerParamsModel,
    WithForwardedRefPropsModel,
    Pick<PressPropsModel, 'onPress' | 'onPressIn' | 'onPressOut'>,
    WithChildrenPropsModel {
  animation?: WithAnimationPropsModel;
  isCenter?: boolean;
  isDistribute?: boolean;
  isHorizontalScrollable?: boolean;
  isRowAlign?: boolean;
  isVerticalScrollable?: boolean;
  onMeasure?(measure: MeasureModel): void;
  onScroll?(position: PositionModel): void;
  spacing?: SpacingModel;
}

import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { MeasureModel, PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';
import type { ViewProps } from 'react-native';

export interface _ViewPropsModel extends WithChildrenPropsModel, WithTestIdModel {
  Component?: ComponentType<ViewProps>;
  isHorizontalScrollable?: boolean;
  isVerticalScrollable?: boolean;
  onMeasure?(measure: MeasureModel): void;
  onPress?: CallableModel;
  onPressIn?: CallableModel;
  onPressOut?: CallableModel;
  onScroll?(position: PositionModel): void;
  style?: StyleModel;
}

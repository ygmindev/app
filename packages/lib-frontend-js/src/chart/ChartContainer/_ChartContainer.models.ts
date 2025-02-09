import { type ChartPropsModel } from '@lib/frontend/chart/chart.models';
import { type ChildPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type _ChartContainerPropsModel<TType> = ChartPropsModel<TType> &
  ChildPropsModel<ReactElement<ChartPropsModel<TType>>>;

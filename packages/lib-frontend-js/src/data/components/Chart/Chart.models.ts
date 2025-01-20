import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type _ChartPropsModel } from '@lib/frontend/data/components/Chart/_Chart.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type ChartPropsModel<TType> = Omit<_ChartPropsModel<TType>, 'gradientStep'> &
  DimensionModel & {
    title?: AsyncTextModel;
  };

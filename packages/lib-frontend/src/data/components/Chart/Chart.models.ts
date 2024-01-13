import { type DimensionModel } from '@lib-frontend/core/core.models';
import { type _ChartPropsModel } from '@lib-frontend/data/components/Chart/_Chart.models';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';

export type ChartPropsModel<TType> = Omit<_ChartPropsModel<TType>, 'gradientStep'> &
  DimensionModel & {
    title?: TranslatableTextModel;
  };

import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ChildPropsModel, type DimensionModel } from '@lib/frontend/core/core.models';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type ChartPropsModel<TType> = ChildPropsModel &
  DimensionModel & {
    axisColor?: string;
    data?: Array<TType>;
    series?: Array<ChartSeriesModel<TType>>;
    textStyles?: TextStyleModel;
    xKey?: string;
    yKey?: string;
    zKey?: string;
  };

export type ChartSeriesModel<TType> = WithIdModel<StringKeyModel<TType>> & {
  color?: string;
  value?: AsyncTextModel;
};

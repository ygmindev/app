import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type ChartPropsModel<TType> = {
  data?: Array<TType>;
  series?: Array<ChartSeriesModel<TType>>;
  xKey: string;
  yKey?: string;
  zKey?: string;
};

export type ChartSeriesModel<TType> = WithIdModel<StringKeyModel<TType>> & {
  color?: string;
  title?: AsyncTextModel;
};

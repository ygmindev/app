import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _ChartPropsModel<TType> = {
  data?: Array<TType>;
  gradientStep: number;
  series?: Array<WithIdModel<StringKeyModel<TType>> & { title?: TranslatableTextModel }>;
};

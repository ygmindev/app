import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type FilterArrayParamsModel<TType extends unknown> = [
  values: Array<TType>,
  filters?: Array<FilterModel<TType>>,
  skip?: number,
  take?: number,
];

export type FilterArrayModel<TType extends unknown> = Array<TType>;

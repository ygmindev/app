import { type PartialModel, type PrimitiveModel } from '#lib-shared/core/core.models';
import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType, TKey extends keyof TType = keyof TType> = {
  condition?: FilterConditionModel;
  field: TKey;
  value: TType[TKey] extends PrimitiveModel ? TType[TKey] : PartialModel<TType[TKey]>;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;

import {
  type PartialModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '#lib-shared/core/core.models';
import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType, TKey extends StringKeyModel<TType>> = {
  condition?: FilterConditionModel;
  field: TKey;
  value: TType[TKey] extends PrimitiveModel ? TType[TKey] : PartialModel<TType[TKey]>;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;

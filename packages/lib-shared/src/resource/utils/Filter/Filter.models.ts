import type { InferModel, PartialModel } from '#lib-shared/core/core.models';

export interface FilterConditionModel<TType> {
  $eq?: TType;
  $gt?: TType;
  $gte?: TType;
  $in?: Array<TType>;
  $lt?: TType;
  $lte?: TType;
  $ne?: TType;
  $nin?: Array<TType>;
  $not?: FilterConditionModel<TType>;
}

export interface FilterCombineModel<TType> {
  $and?: Array<FilterModel<TType>>;
  $or?: Array<FilterModel<TType>>;
}

export type FilterModel<TType> = FilterCombineModel<TType> &
  (
    | PartialModel<TType>
    | {
        [TKey in keyof TType]?:
          | FilterConditionModel<InferModel<TType[TKey]>>
          | InferModel<TType[TKey]>;
      }
  );

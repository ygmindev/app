import { type InferModel, type PartialModel } from '#lib-shared/core/core.models';

export type FilterConditionModel<TType> = {
  $eq?: TType;
  $gt?: TType;
  $gte?: TType;
  $in?: Array<TType>;
  $lt?: TType;
  $lte?: TType;
  $ne?: TType;
  $nin?: Array<TType>;
  $not?: FilterConditionModel<TType>;
};

export type FilterCombineModel<TType> = {
  $and?: Array<FilterModel<TType>>;
  $or?: Array<FilterModel<TType>>;
};

export type FilterModel<TType> = FilterCombineModel<TType> &
  (
    | PartialModel<TType>
    | {
        [TKey in keyof TType]?:
          | FilterConditionModel<InferModel<TType[TKey]>>
          | InferModel<TType[TKey]>;
      }
  );

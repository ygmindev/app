import {
  type InferModel,
  type PartialDeepModel,
  type PartialModel,
} from '#lib-shared/core/core.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type UnsetModel<TType> = {
  [TKey in keyof EntityResourceDataModel<TType>]?: true | UnsetModel<TType[TKey]>;
};

export type PushModel<TType> = {
  [TKey in keyof EntityResourceDataModel<TType>]?: InferModel<TType[TKey]>;
};

export type UpdateModel<TType> = {
  $pull?: FilterModel<TType>;
  $push?: PushModel<TType>;
  $set?: PartialDeepModel<EntityResourceDataModel<TType>>;
  $unset?: UnsetModel<TType>;
} & PartialModel<EntityResourceDataModel<TType>>;

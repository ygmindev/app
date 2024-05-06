import { type InferModel, type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type UnsetModel<TType> = {
  [TKey in keyof EntityResourceDataModel<TType>]?:
    | true
    | UnsetModel<EntityResourceDataModel<TType>[TKey]>;
};

export type UpdateElementModel<TType> = {
  [TKey in keyof EntityResourceDataModel<TType>]?: InferModel<EntityResourceDataModel<TType>[TKey]>;
};

export type UpdateModel<TType> = PartialModel<EntityResourceDataModel<TType>> & {
  $pull?: UpdateElementModel<TType>;
  $push?: UpdateElementModel<TType>;
  $set?: EntityResourceDataModel<TType>;
  $unset?: UnsetModel<TType>;
};

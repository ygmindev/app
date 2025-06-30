import { type EntityResourceDataModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type InferModel, type PartialModel } from '@lib/shared/core/core.models';

export type UnsetModel<TType> = {
  [TKey in keyof EntityResourceDataModel<TType>]?:
    | true
    | UnsetModel<EntityResourceDataModel<TType>[TKey]>;
};

export type UpdateElementModel<TType> = {
  [TKey in keyof EntityResourceDataModel<TType>]?: InferModel<EntityResourceDataModel<TType>[TKey]>;
};

export type UpdateModel<TType> = PartialModel<EntityResourceDataModel<TType>>;

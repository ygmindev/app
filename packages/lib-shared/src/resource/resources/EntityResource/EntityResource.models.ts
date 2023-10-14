import {
  type PartialModel,
  type PrimitiveModel,
  type RequiredModel,
} from '#lib-shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?(): Promise<void>;
  created: Date;
};

export type EntityResourceDataModel<TType> = {
  [TKey in keyof Omit<
    TType,
    keyof RequiredModel<EntityResourceModel>
  >]?: RequiredModel<TType>[TKey] extends EntityResourceModel
    ? Pick<EntityResourceModel, '_id'>
    : RequiredModel<TType>[TKey];
};

export type EntityResourcePartialModel<TType> = TType extends PrimitiveModel
  ? TType
  : TType extends Array<infer TElement>
  ? Array<EntityResourcePartialModel<TElement>>
  : (TType extends EntityResourceModel ? { _id: string } : PartialModel<Omit<TType, '_id'>>) & {
      [TKey in keyof Omit<RequiredModel<TType>, '_id'>]?: EntityResourcePartialModel<
        RequiredModel<TType>[TKey]
      >;
    };

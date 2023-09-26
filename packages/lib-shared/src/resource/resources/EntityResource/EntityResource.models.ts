import {
  type EmptyObjectModel,
  type PrimitiveModel,
  type RequiredModel,
} from '#lib-shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?(): Promise<void>;
  created: Date;
};

export type EntityResourceDataModel<TType> = Omit<TType, keyof EntityResourceModel>;

export type EntityResourcePartialModel<TType> =
  | TType
  | ((TType extends EntityResourceModel ? { _id: string } : EmptyObjectModel) & {
      [TKey in keyof Omit<
        TType,
        keyof EntityResourceModel
      >]?: RequiredModel<TType>[TKey] extends PrimitiveModel
        ? TType[TKey]
        : RequiredModel<TType>[TKey] extends Array<infer TValue>
        ? Array<EntityResourcePartialModel<TValue>>
        : EntityResourcePartialModel<TType[TKey]>;
    });

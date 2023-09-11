import { type PartialModel } from '#lib-shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?(): Promise<void>;
  created: Date;
};

// export type EntityResourcePartialModel<TType> = (TType extends EntityResourceModel
//   ? { _id: string }
//   : object) &
//   PartialModel<TType>;

// export type EntityResourceDataModel<TType> = {
//   [TKey in keyof Omit<TType, keyof EntityResourceModel>]: TType[TKey] extends PrimitiveModel
//     ? TType[TKey]
//     : EntityResourceDataModel<TType[TKey]>;
// };

export type EntityResourcePartialModel<TType> = PartialModel<TType> &
  (TType extends EntityResourceModel ? { _id: string } : undefined);

export type EntityResourceDataModel<TType> = Omit<TType, keyof EntityResourceModel>;

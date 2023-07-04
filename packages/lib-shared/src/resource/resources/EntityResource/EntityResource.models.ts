import {
  type OptionalCallablePromiseModel,
  type PartialModel,
  type RequiredModel,
} from '#lib-shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?: OptionalCallablePromiseModel;
  created: Date;
};

export type EntityResourcePartialModel<TType> = PartialModel<TType> &
  (TType extends EntityResourceModel ? RequiredModel<Pick<TType, '_id'>> : undefined);

export type EntityResourceDataModel<TType> = Omit<TType, keyof EntityResourceModel>;

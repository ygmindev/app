import type { CallablePromiseModel, PartialModel } from '@lib/shared/core/core.models';

export interface EntityResourceModel {
  _id: string;
  beforeCreate?: CallablePromiseModel;
  created: Date;
}

export type EntityResourcePartialModel<TType> = PartialModel<TType> &
  (TType extends EntityResourceModel ? Required<Pick<TType, '_id'>> : undefined);

export type EntityResourceDataModel<TType> = Omit<TType, keyof EntityResourceModel>;

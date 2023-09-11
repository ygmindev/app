import { type PartialModel } from '#lib-shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?(): Promise<void>;
  created: Date;
};

export type EntityResourcePartialModel<TType> = PartialModel<TType> &
  (TType extends EntityResourceModel ? { _id: string } : undefined);

export type EntityResourceDataModel<TType> = Omit<TType, keyof EntityResourceModel>;

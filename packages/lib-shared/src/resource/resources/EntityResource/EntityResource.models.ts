import type { PartialModel } from '@lib/shared/core/core.models';

export interface EntityResourceModel {
  _id: string;
  beforeCreate?(): Promise<void>;
  created: Date;
}

export type EntityResourcePartialModel<TType> = PartialModel<TType> &
  (TType extends EntityResourceModel ? Required<Pick<TType, '_id'>> : undefined);

export type EntityResourceDataModel<TType> = Omit<TType, keyof EntityResourceModel>;

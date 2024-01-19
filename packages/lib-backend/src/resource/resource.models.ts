import { type ClassModel, type NilModel } from '@lib/shared/core/core.models';

export type ResourceClassModel<TType> =
  TType extends Array<infer TElement>
    ? Array<ClassModel<TElement>>
    : TType extends NilModel
      ? undefined
      : ClassModel<TType>;

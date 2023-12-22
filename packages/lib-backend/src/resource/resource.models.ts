import { type ClassModel } from '#lib-shared/core/core.models';

export type ResourceClassModel<TType> = TType extends Array<infer TElement>
  ? Array<ClassModel<TElement>>
  : TType extends undefined | null
    ? undefined
    : ClassModel<TType>;

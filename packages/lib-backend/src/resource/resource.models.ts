import { type AbstractClassModel, type ClassModel } from '#lib-shared/core/core.models';

export type ResourceClassModel<TType> = TType extends Array<infer TElement>
  ? Array<ClassModel<TElement> | AbstractClassModel<TElement>>
  : TType extends undefined | never | null
  ? undefined
  : ClassModel<TType> | AbstractClassModel<TType>;

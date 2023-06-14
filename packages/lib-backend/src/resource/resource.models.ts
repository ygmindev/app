import type { ConstructorModel } from '#lib-shared/core/core.models';

export type ResourceConstructorModel<TType> = TType extends Array<infer TElement>
  ? Array<ConstructorModel<TElement>>
  : TType extends undefined | never | null
  ? TType
  : ConstructorModel<TType>;

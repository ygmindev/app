import type { ConstructorModel, PartialModel } from '#lib-shared/core/core.models';

export interface UnionParamsModel<TType> {
  Resource: Array<ConstructorModel<PartialModel<TType>>>;
  name: string;
  resolve(value: TType): ConstructorModel | undefined;
}

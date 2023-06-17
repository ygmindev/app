import type { ConstructorModel, PartialModel } from '#lib-shared/core/core.models';

export type UnionParamsModel<TType> = {
  Resource: Array<ConstructorModel<PartialModel<TType>>>;
  name: string;
  resolve(value: TType): ConstructorModel | undefined;
};

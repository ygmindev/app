import { type ClassModel, type PartialModel } from '#lib-shared/core/core.models';

export type UnionParamsModel<TType> = {
  Resource: Array<ClassModel<PartialModel<TType>>>;
  name: string;
  resolve(value: TType): ClassModel | undefined;
};

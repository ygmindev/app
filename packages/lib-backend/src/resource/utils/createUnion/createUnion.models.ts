import { type ClassModel, type PartialModel } from '#lib-shared/core/core.models';

export type CreateUnionParamsModel<TType> = {
  Resource: Array<ClassModel<PartialModel<TType>>>;
  name: string;
  resolve(value: TType): ClassModel | undefined;
};

export type CreateUnionModel<TType> = ClassModel<TType>;

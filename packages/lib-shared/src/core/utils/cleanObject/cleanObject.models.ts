import { type ClassModel } from '#lib-shared/core/core.models';

export type CleanObjectParamsModel<TType> = [
  value: TType,
  options?: {
    additionalTransformer?<TValue>(value?: TValue, key?: string): TValue | undefined;
    primitiveTypes?: Array<ClassModel>;
  },
];

export type CleanObjectModel<TType> = TType;

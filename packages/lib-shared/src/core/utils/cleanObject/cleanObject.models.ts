import { type ClassModel } from '#lib-shared/core/core.models';

export type CleanObjectParamsModel<TType> = [
  value: TType,
  options?: {
    keyValueTransformer?<TValue>(value?: TValue, key?: string): TValue | undefined;
    objectTransformer?<TValue>(value?: TValue): TValue | undefined;
    primitiveTypes?: Array<ClassModel>;
  },
];

export type CleanObjectModel<TType> = TType;

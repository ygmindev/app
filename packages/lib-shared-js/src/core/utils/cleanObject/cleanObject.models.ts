import { type ClassModel } from '@lib/shared/core/core.models';

export type CleanObjectParamsModel<TType> = [
  value: TType,
  options?: {
    primitiveTypes?: Array<ClassModel>;
    keyValueTransformer?<TValue>(value?: TValue, key?: string, depth?: number): TValue | undefined;
    objectTransformer?<TValue>(value?: TValue, depth?: number): TValue | undefined;
  },
  depth?: number,
];

export type CleanObjectModel<TType> = TType;

import { type ClassModel } from '@lib/shared/core/core.models';

export type CleanObjectParamsModel<TType> = [
  value: TType,
  options?: {
    keyValueTransformer?<TValue>(value?: TValue, key?: string, depth?: number): TValue | undefined;
    objectTransformer?<TValue>(value?: TValue, depth?: number): TValue | undefined;
    primitiveTypes?: Array<ClassModel>;
  },
  depth?: number,
];

export type CleanObjectModel<TType> = TType;

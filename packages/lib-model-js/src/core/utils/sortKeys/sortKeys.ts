import { sort } from '@lib/shared/core/utils/sort/sort';

export const sortKeys = <TType extends Record<string, unknown>>(value: TType): TType =>
  sort(Object.keys(value)).reduce((result, key) => ({ ...result, [key]: value[key] }), {} as TType);

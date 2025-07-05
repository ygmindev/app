import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';

// TODO: type exclude nil values?
export const isEmpty = (value: unknown): boolean =>
  value === '' ||
  value === null ||
  value === undefined ||
  isEqual(value, []) ||
  (!(value instanceof RegExp) && JSON.stringify(value) === '{}');

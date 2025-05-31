import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';

export const isEmpty = (value: unknown): boolean =>
  value === '' ||
  value === null ||
  value === undefined ||
  isEqual(value, []) ||
  (!(value instanceof RegExp) && JSON.stringify(value) === '{}');

import { isNil } from 'lodash';

export const isEmpty = (value: unknown): boolean =>
  value === '' || isNil(value) || JSON.stringify(value) === '{}';

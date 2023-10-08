import { default as _isEmpty } from 'lodash/isEmpty';

export const isEmpty = (value: unknown): boolean =>
  value === '' ||
  value === null ||
  value === undefined ||
  _isEmpty(value) ||
  JSON.stringify(value) === '{}';

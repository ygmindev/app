import { isPlainObject } from 'lodash';

export const objectDepth = (value: unknown): number =>
  isPlainObject(value) ? 1 + Math.max(-1, ...Object.values(value as object).map(objectDepth)) : 0;

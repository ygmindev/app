import isEqual from 'lodash/isEqual';

export const _isEqual = (x: unknown, y: unknown): boolean => isEqual(x, y);

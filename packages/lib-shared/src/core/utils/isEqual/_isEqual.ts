import { isEqual } from 'lodash';

export const _isEqual = (x: unknown, y: unknown): boolean => isEqual(x, y);

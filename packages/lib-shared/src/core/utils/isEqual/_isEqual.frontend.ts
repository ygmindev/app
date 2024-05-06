import isEqual from 'react-fast-compare';

export const _isEqual = (x: unknown, y: unknown): boolean => isEqual(x, y);

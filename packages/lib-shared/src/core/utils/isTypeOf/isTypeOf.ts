import { get, intersection } from 'lodash';

export const isTypeOf = (x: unknown, y: unknown): boolean =>
  intersection(
    [x, typeof x, get(x, ['constructor', 'name']), get(x, ['name'])].filter(Boolean),
    [y, typeof y, get(y, ['constructor', 'name']), get(y, ['name'])].filter(Boolean),
  ).length > 0;

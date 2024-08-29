import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import get from 'lodash/get';
import intersection from 'lodash/intersection';

export const isTypeOf = (x: unknown, y: unknown): boolean =>
  intersection(
    filterNil([
      x,
      typeof x,
      get(x, ['constructor', 'name']),
      get(x, ['type', 'name']),
      get(x, ['name']),
    ]),
    filterNil([
      y,
      typeof y,
      get(y, ['constructor', 'name']),
      get(y, ['type', 'name']),
      get(y, ['name']),
    ]),
  ).length > 0;

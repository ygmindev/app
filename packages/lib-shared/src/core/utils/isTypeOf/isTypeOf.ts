import get from 'lodash/get';
import intersection from 'lodash/intersection';

import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const isTypeOf = (x: unknown, y: unknown): boolean =>
  intersection(
    filterNil([x, typeof x, get(x, ['constructor', 'name']), get(x, ['name'])]),
    filterNil([y, typeof y, get(y, ['constructor', 'name']), get(y, ['name'])]),
  ).length > 0;

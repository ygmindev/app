import isArray from 'lodash/isArray';
import reduce from 'lodash/reduce';
import { firstBy } from 'thenby';

import { type _SortModel, type _SortParamsModel } from '#lib-shared/core/utils/sort/_sort.models';

export const _sort = <TType>({ by, value }: _SortParamsModel<TType>): _SortModel<TType> =>
  [...value].sort(
    by
      ? reduce(
          by,
          (result, v, k) => {
            const [key, _params] = isArray(v) ? [v[0], v[1] ? 1 : -1] : [v, undefined];
            return k
              ? result.thenBy(key as keyof TType, _params as SortOrder)
              : firstBy(key as keyof TType, _params as SortOrder);
          },
          undefined as unknown as IThenBy<TType>,
        )
      : undefined,
  );

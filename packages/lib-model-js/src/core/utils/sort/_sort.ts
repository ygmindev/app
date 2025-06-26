import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { type _SortModel, type _SortParamsModel } from '@lib/shared/core/utils/sort/_sort.models';
import reduce from 'lodash/reduce';
import { default as thenby } from 'thenby';

export const _sort = <TType extends unknown>(
  ...[value, by]: _SortParamsModel<TType>
): _SortModel<TType> =>
  [...value].sort(
    by
      ? reduce(
          by,
          (result, v, k) => {
            const [key, _params] = isArray(v) ? [v[0], v[1] ? 1 : -1] : [v, undefined];
            return k
              ? result.thenBy(key as keyof TType, _params as SortOrder)
              : thenby.firstBy(key as keyof TType, _params as SortOrder);
          },
          undefined as unknown as IThenBy<TType>,
        )
      : undefined,
  );

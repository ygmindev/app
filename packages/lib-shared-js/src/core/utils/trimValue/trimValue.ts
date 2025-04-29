import {
  type TrimValueModel,
  type TrimValueParamsModel,
} from '@lib/shared/core/utils/trimValue/trimValue.models';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import reduce from 'lodash/reduce';
import trim from 'lodash/trim';

export const trimValue = <TType extends string | Record<string, unknown> | Array<unknown>>(
  params: TrimValueParamsModel<TType>,
): TrimValueModel<TType> =>
  (isString(params)
    ? trim(params, ' ')
    : isArray(params)
      ? params.map((v) => trimValue(v as TType))
      : isPlainObject(params)
        ? reduce(params, (r, v, k) => ({ ...r, [trim(k, ' ')]: trimValue(v) }), {})
        : params) as TType;

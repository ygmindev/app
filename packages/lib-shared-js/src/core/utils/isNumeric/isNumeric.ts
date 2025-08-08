import {
  type IsNumericModel,
  type IsNumericParamsModel,
} from '@lib/shared/core/utils/isNumeric/isNumeric.models';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

export const isNumeric = (params: IsNumericParamsModel): IsNumericModel =>
  isNumber(params)
    ? isFinite(params)
    : isString(params)
      ? /^[+-]?(?:\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(params.trim())
      : false;

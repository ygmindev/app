import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

import {
  type IsNumericModel,
  type IsNumericParamsModel,
} from '@lib-shared/core/utils/isNumeric/isNumeric.models';

export const isNumeric = (params: IsNumericParamsModel): IsNumericModel =>
  isNumber(params) ? isFinite(params) : isString(params) ? !isNaN(parseFloat(params)) : false;

import isString from 'lodash/isString';

import {
  type StringifyModel,
  type StringifyParamsModel,
} from '#lib-shared/core/utils/stringify/stringify.models';

export const stringify = (params?: StringifyParamsModel): StringifyModel =>
  isString(params) ? params : params ? JSON.stringify(params, null, '  ') : 'undefined';

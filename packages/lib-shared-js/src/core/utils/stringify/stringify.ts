import { _stringify } from '@lib/shared/core/utils/stringify/_stringify';
import {
  type StringifyModel,
  type StringifyParamsModel,
} from '@lib/shared/core/utils/stringify/stringify.models';
import isString from 'lodash/isString';

export const stringify = (...[params, options]: StringifyParamsModel): StringifyModel =>
  isString(params) ? params : params ? _stringify(params, options) : 'undefined';

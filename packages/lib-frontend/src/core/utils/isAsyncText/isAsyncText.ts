import { type AsyncTextModel } from '@lib/frontend/core/core.models';
import { type IsAsyncTextParamsModel } from '@lib/frontend/core/utils/isAsyncText/isAsyncText.models';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

export const isAsyncText = (params: IsAsyncTextParamsModel): params is AsyncTextModel =>
  params && (isString(params) || isFunction(params)) ? true : false;

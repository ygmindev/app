import type { IsTranslatableTextParamsModel } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText.models';
import type { CallableArgsModel } from '@lib/shared/core/core.models';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

export const isTranslatableText = (
  params: IsTranslatableTextParamsModel,
): params is string | CallableArgsModel =>
  params && (isString(params) || isFunction(params)) ? true : false;

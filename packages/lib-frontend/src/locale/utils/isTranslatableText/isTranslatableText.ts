import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import { type IsTranslatableTextParamsModel } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText.models';
import { type ArrayCallableModel } from '#lib-shared/core/core.models';

export const isTranslatableText = (
  params: IsTranslatableTextParamsModel,
): params is string | ArrayCallableModel =>
  params && (isString(params) || isFunction(params)) ? true : false;

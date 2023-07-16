import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type IsTranslatableTextParamsModel } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText.models';

export const isTranslatableText = (
  params: IsTranslatableTextParamsModel,
): params is TranslatableTextModel =>
  params && (isString(params) || isFunction(params)) ? true : false;

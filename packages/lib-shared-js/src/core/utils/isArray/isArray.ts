import { isArray as isArrayBase } from '@lib/shared/core/utils/isArray/isArray.base';
import { type IsArrayParamsModel } from '@lib/shared/core/utils/isArray/isArray.models';

export const isArray = <TType>(
  params: IsArrayParamsModel<TType>,
): params is Extract<TType, Array<unknown>> => isArrayBase(params);

import { Collection } from '@lib/model/core/Collection/Collection';
import { isArray as isArrayBase } from '@lib/shared/core/utils/isArray/isArray.base';
import { type IsArrayParamsModel } from '@lib/shared/core/utils/isArray/isArray.models';

export const isArray = (params: IsArrayParamsModel): params is Array<unknown> =>
  isArrayBase(params) || params instanceof Collection ? true : false;

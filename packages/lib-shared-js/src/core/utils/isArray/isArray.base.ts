import { type IsArrayParamsModel } from '@lib/shared/core/utils/isArray/isArray.models';

export const isArray = (params: IsArrayParamsModel): params is Array<unknown> => {
  return Array.isArray(params);
};

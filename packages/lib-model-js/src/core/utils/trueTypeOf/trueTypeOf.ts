import {
  type TrueTypeOfModel,
  type TrueTypeOfParamsModel,
} from '@lib/shared/core/utils/trueTypeOf/trueTypeOf.models';

export const trueTypeOf = (params: TrueTypeOfParamsModel): TrueTypeOfModel =>
  Object.prototype.toString
    .call(params)
    .replace(/\[object /gi, '')
    .replace(/\]/gi, '');

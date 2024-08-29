import {
  type IsPrimitiveModel,
  type IsPrimitiveParamsModel,
} from '@lib/shared/core/utils/isPrimitive/isPrimitive.models';

export const isPrimitive = (params: IsPrimitiveParamsModel): IsPrimitiveModel =>
  params !== Object(params) || params instanceof Date;

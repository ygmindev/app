import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type _WithResultParamsModel } from '@lib/backend/resource/utils/withResult/_withResult.models';

export type WithResultParamsModel<
  TType extends unknown,
  TData extends unknown,
> = WithAccessParamsModel & _WithResultParamsModel<TType, TData>;

export type WithResultModel = MethodDecorator;

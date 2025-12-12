import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type _WithOutputParamsModel } from '@lib/backend/resource/utils/withOutput/_withOutput.models';

export type WithOutputParamsModel<
  TType extends unknown,
  TData extends unknown,
  TParams extends unknown,
> = WithAccessParamsModel & _WithOutputParamsModel<TType, TData, TParams>;

export type WithOutputModel = MethodDecorator;

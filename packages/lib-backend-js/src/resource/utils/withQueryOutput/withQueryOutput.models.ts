import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type _WithQueryOutputParamsModel } from '@lib/backend/resource/utils/withQueryOutput/_withQueryOutput.models';

export type WithQueryOutputParamsModel<TType extends unknown> = WithAccessParamsModel &
  _WithQueryOutputParamsModel<TType>;

export type WithQueryOutputModel = MethodDecorator;

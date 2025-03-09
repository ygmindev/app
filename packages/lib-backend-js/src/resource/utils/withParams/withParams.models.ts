import {
  type _WithParamsModel,
  type _WithParamsParamsModel,
} from '@lib/backend/resource/utils/withParams/_withParams.models';

export type WithParamsParamsModel<TType extends unknown> = _WithParamsParamsModel<TType>;

export type WithParamsModel = _WithParamsModel;

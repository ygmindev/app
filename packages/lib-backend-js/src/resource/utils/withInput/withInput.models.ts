import {
  type _WithInputModel,
  type _WithInputParamsModel,
} from '@lib/backend/resource/utils/withInput/_withInput.models';

export type WithInputParamsModel<TType extends unknown> = _WithInputParamsModel<TType>;

export type WithInputModel = _WithInputModel;

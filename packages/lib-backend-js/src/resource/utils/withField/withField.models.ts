import {
  type _WithFieldModel,
  type _WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/_withField.models';

export type WithFieldParamsModel<TType extends unknown> = _WithFieldParamsModel<TType>;

export type WithFieldModel = _WithFieldModel;

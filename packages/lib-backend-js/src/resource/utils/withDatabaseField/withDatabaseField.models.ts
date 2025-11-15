import {
  type WithFieldModel,
  type WithFieldParamsModel,
} from '@lib/backend/resource/utils/withField/withField.models';

export type WithDatabaseFieldParamsModel<TType extends unknown> = Omit<
  WithFieldParamsModel<TType>,
  'isDatabase'
>;

export type WithDatabaseFieldModel = WithFieldModel;

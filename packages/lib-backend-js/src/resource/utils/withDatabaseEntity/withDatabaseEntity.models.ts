import {
  type WithEntityModel,
  type WithEntityParamsModel,
} from '@lib/backend/resource/utils/withEntity/withEntity.models';

export type WithDatabaseEntityParamsModel<TType extends unknown> = Omit<
  WithEntityParamsModel<TType>,
  'isDatabase'
>;

export type WithDatabaseEntityModel = WithEntityModel;

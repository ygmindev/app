import {
  type WithDatabaseEntityModel,
  type WithDatabaseEntityParamsModel,
} from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity.models';

export type WithEmbeddedEntityParamsModel<TType extends unknown> =
  WithDatabaseEntityParamsModel<TType>;

export type WithEmbeddedEntityModel = WithDatabaseEntityModel;

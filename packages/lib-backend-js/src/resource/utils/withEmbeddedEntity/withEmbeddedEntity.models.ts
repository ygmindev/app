import {
  type WithEntityModel,
  type WithEntityParamsModel,
} from '@lib/backend/resource/utils/withEntity/withEntity.models';

export type WithEmbeddedEntityParamsModel<TType extends unknown> = WithEntityParamsModel<TType>;

export type WithEmbeddedEntityModel = WithEntityModel;

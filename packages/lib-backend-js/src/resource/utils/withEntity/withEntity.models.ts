import {
  type _WithEntityModel,
  type _WithEntityParamsModel,
} from '@lib/backend/resource/utils/withEntity/_withEntity.models';

export type WithEntityParamsModel<TType extends unknown> = _WithEntityParamsModel<TType>;

export type WithEntityModel = _WithEntityModel;

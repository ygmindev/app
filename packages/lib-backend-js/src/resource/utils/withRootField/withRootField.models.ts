import {
  type WithManyToOneFieldModel,
  type WithManyToOneFieldParamsModel,
} from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField.models';

export type WithRootFieldParamsModel<TType extends unknown> = Required<
  Pick<WithManyToOneFieldParamsModel<TType>, 'Resource'>
>;

export type WithRootFieldModel = WithManyToOneFieldModel;

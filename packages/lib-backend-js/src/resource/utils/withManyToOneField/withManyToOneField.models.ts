import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';

export type WithManyToOneFieldParamsModel<TType extends unknown> = Pick<
  WithRefFieldParamsModel<TType>,
  'isDatabase' | 'isOptional'
> &
  Required<Pick<WithRefFieldParamsModel<TType>, 'Resource'>>;

export type WithManyToOneFieldModel = WithRefFieldModel;

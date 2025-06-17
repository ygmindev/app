import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';

export type WithOneToManyFieldParamsModel<TType extends unknown> = Pick<
  WithRefFieldParamsModel<TType>,
  'isDatabase' | 'isOptional'
> &
  Required<Pick<WithRefFieldParamsModel<TType>, 'root' | 'Resource'>>;

export type WithOneToManyFieldModel = WithRefFieldModel;

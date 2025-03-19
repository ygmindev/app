import {
  type WithOneToManyFieldModel,
  type WithOneToManyFieldParamsModel,
} from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField.models';

export type WithEmbeddedFieldParamsModel<TType extends unknown> = Pick<
  WithOneToManyFieldParamsModel<TType>,
  'Resource' | 'isDatabase'
>;

export type WithEmbeddedResourceFieldModel = WithOneToManyFieldModel;

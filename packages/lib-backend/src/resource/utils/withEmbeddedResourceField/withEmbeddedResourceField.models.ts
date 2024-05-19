import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type WithEmbeddedResourceFieldParamsModel<TType extends unknown> = Pick<
  WithFieldParamsModel<TType>,
  'isRepository' | 'Resource' | 'root'
>;

export type WithEmbeddedResourceFieldModel = PropertyDecorator;

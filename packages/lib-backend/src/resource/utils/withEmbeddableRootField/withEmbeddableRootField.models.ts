import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type WithEmbeddableRootFieldParamsModel<TType extends unknown> = Pick<
  WithFieldParamsModel<TType>,
  'Resource' | 'name'
>;

export type WithEmbeddableRootFieldModel = PropertyDecorator;

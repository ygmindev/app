import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type WithEmbeddableRootFieldParamsModel<TType> = Pick<
  WithFieldParamsModel<TType>,
  'Resource' | 'name'
>;

export type WithEmbeddableRootFieldModel = PropertyDecorator;

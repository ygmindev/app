import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type WithRefFieldParamsModel<TType extends unknown> = Pick<
  WithFieldParamsModel<TType>,
  | 'inversedBy'
  | 'isArray'
  | 'isDatabase'
  | 'isOptional'
  | 'mappedBy'
  | 'name'
  | 'relation'
  | 'Resource'
>;

export type WithRefFieldModel = PropertyDecorator;

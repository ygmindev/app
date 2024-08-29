import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type WithRefFieldParamsModel<TType extends unknown> = Pick<
  WithFieldParamsModel<TType>,
  'Resource' | 'name' | 'isOptional'
>;

export type WithRefFieldModel = PropertyDecorator;

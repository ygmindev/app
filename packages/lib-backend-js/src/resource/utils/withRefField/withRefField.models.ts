import { type WithFieldParamsModel } from '@lib/backend/resource/utils/withField/withField.models';

export type WithRefFieldParamsModel<TType extends unknown> = Pick<
  WithFieldParamsModel<TType>,
  'leaf' | 'isArray' | 'isDatabase' | 'isOptional' | 'root' | 'relation' | 'Resource'
>;

export type WithRefFieldModel = PropertyDecorator;

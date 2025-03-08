import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';

export type WithManyToManyFieldParamsModel<TType extends unknown> = Pick<
  WithRefFieldParamsModel<TType>,
  'isDatabase' | 'isOptional' | 'inversedBy' | 'mappedBy' | 'Resource'
>;

export type WithManyToManyFieldModel = WithRefFieldModel;

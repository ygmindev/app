import {
  type WithOneToManyFieldModel,
  type WithOneToManyFieldParamsModel,
} from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField.models';
import { type RequiredModel } from '@lib/shared/core/core.models';

export type WithEmbeddedResourceFieldParamsModel<TType extends unknown> = Pick<
  WithOneToManyFieldParamsModel<TType>,
  'Resource' | 'isDatabase'
> &
  RequiredModel<Pick<WithOneToManyFieldParamsModel<TType>, 'mappedBy'>>;

export type WithEmbeddedResourceFieldModel = WithOneToManyFieldModel;

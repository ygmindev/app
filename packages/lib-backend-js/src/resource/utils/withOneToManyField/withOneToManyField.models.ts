import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';
import { type RequiredModel } from '@lib/shared/core/core.models';

export type WithOneToManyFieldParamsModel<TType extends unknown> = Pick<
  WithRefFieldParamsModel<TType>,
  'isDatabase' | 'isOptional'
> &
  RequiredModel<Pick<WithRefFieldParamsModel<TType>, 'mappedBy' | 'Resource'>>;

export type WithOneToManyFieldModel = WithRefFieldModel;

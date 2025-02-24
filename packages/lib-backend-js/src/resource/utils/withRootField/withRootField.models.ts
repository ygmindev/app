import {
  type WithManyToOneFieldModel,
  type WithManyToOneFieldParamsModel,
} from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField.models';
import { type RequiredModel } from '@lib/shared/core/core.models';

export type WithRootFieldParamsModel<TType extends unknown> = RequiredModel<
  Pick<WithManyToOneFieldParamsModel<TType>, 'Resource' | 'mappedBy'>
>;

export type WithRootFieldModel = WithManyToOneFieldModel;

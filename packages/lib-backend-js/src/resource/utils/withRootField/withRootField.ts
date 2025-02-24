import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import {
  type WithRootFieldModel,
  type WithRootFieldParamsModel,
} from '@lib/backend/resource/utils/withRootField/withRootField.models';

export const withRootField =
  <TType extends unknown>({
    Resource,
    mappedBy,
  }: WithRootFieldParamsModel<TType>): WithRootFieldModel =>
  (target, propertyKey) =>
    withManyToOneField({
      Resource,
      isDatabase: true,
      isOptional: false,
      mappedBy,
    })(target, propertyKey);

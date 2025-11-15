import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import {
  type WithRootFieldModel,
  type WithRootFieldParamsModel,
} from '@lib/backend/resource/utils/withRootField/withRootField.models';

export const withRootField =
  <TType extends unknown>({ Resource }: WithRootFieldParamsModel<TType>): WithRootFieldModel =>
  (target, propertyKey) =>
    withManyToOneField({
      Resource,
      isOptional: false,
    })(target, propertyKey);

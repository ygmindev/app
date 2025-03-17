import {
  type WithEmbeddedResourceFieldModel,
  type WithEmbeddedResourceFieldParamsModel,
} from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField.models';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';

export const withEmbeddedResourceField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
    root,
  }: WithEmbeddedResourceFieldParamsModel<TType>): WithEmbeddedResourceFieldModel =>
  (target, propertyKey) =>
    withOneToManyField({
      Resource,
      isDatabase,
      root,
    })(target, propertyKey);

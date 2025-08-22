import {
  type WithEmbeddedFieldParamsModel,
  type WithEmbeddedResourceFieldModel,
} from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField.models';
import { withField } from '@lib/backend/resource/utils/withField/withField';

export const withEmbeddedField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
  }: WithEmbeddedFieldParamsModel<TType>): WithEmbeddedResourceFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      isDatabase,
      isOptional: true,
    })(target, propertyKey);

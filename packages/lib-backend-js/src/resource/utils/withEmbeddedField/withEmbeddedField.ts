import {
  type WithEmbeddedFieldParamsModel,
  type WithEmbeddedResourceFieldModel,
} from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField.models';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';

export const withEmbeddedField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
  }: WithEmbeddedFieldParamsModel<TType>): WithEmbeddedResourceFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      isArray: true,
      isDatabase,
      isOptional: true,
      relation: FIELD_RELATION.EMBEDDED,
    })(target, propertyKey);

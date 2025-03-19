import {
  type WithEmbeddedFieldParamsModel,
  type WithEmbeddedResourceFieldModel,
} from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField.models';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

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
      type: PROPERTY_TYPE.RESOURCE,
    })(target, propertyKey);

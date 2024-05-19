import {
  type WithEmbeddedResourceFieldModel,
  type WithEmbeddedResourceFieldParamsModel,
} from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField.models';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const withEmbeddedResourceField =
  <TType extends unknown>({
    Resource,
    isRepository,
    root,
  }: WithEmbeddedResourceFieldParamsModel<TType>): WithEmbeddedResourceFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      isArray: true,
      isOptional: true,
      isRepository,
      relation: FIELD_RELATION.ONE_TO_MANY,
      root,
      type: PROPERTY_TYPE.RESOURCE,
    })(target, propertyKey);

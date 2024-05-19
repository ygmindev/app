import {
  type WithEmbeddableRootFieldModel,
  type WithEmbeddableRootFieldParamsModel,
} from '@lib/backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField.models';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const withEmbeddableRootField =
  <TType extends unknown>({
    Resource,
    name,
  }: WithEmbeddableRootFieldParamsModel<TType>): WithEmbeddableRootFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      isRepository: true,
      name,
      relation: FIELD_RELATION.MANY_TO_ONE,
      type: PROPERTY_TYPE.RESOURCE,
    })(target, propertyKey);

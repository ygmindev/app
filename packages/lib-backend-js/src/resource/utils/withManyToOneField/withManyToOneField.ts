import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import {
  type WithManyToOneFieldModel,
  type WithManyToOneFieldParamsModel,
} from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField.models';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';

export const withManyToOneField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
    isOptional = true,
    mappedBy,
  }: WithManyToOneFieldParamsModel<TType>): WithManyToOneFieldModel =>
  (target, propertyKey) =>
    withRefField({
      Resource,
      isDatabase,
      isOptional,
      mappedBy,
      relation: FIELD_RELATION.MANY_TO_ONE,
    })(target, propertyKey);

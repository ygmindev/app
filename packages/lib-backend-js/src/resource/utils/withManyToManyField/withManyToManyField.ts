import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import {
  type WithManyToManyFieldModel,
  type WithManyToManyFieldParamsModel,
} from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField.models';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';

export const withManyToManyField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
    isOptional = true,
    root,
  }: WithManyToManyFieldParamsModel<TType>): WithManyToManyFieldModel =>
  (target, propertyKey) =>
    withRefField({
      Resource,
      isArray: true,
      isDatabase,
      isOptional,
      relation: FIELD_RELATION.MANY_TO_MANY,
      root,
    })(target, propertyKey);

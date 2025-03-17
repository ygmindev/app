import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import {
  type WithManyToManyFieldModel,
  type WithManyToManyFieldParamsModel,
} from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField.models';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';

export const withManyToManyField =
  <TType extends unknown>({
    Resource,
    leaf,
    isDatabase = true,
    isOptional = true,
    root,
  }: WithManyToManyFieldParamsModel<TType>): WithManyToManyFieldModel =>
  (target, propertyKey) =>
    withRefField({
      Resource,
      leaf,
      isArray: true,
      isDatabase,
      isOptional,
      root,
      relation: FIELD_RELATION.MANY_TO_MANY,
    })(target, propertyKey);

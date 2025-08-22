import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import {
  type WithOneToManyFieldModel,
  type WithOneToManyFieldParamsModel,
} from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField.models';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';

export const withOneToManyField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
    isOptional = true,
    root,
  }: WithOneToManyFieldParamsModel<TType>): WithOneToManyFieldModel =>
  (target, propertyKey) =>
    withRefField({
      Resource,
      
      isDatabase,
      isOptional,
      relation: FIELD_RELATION.ONE_TO_MANY,
      root,
    })(target, propertyKey);

import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import {
  type WithOneToOneFieldModel,
  type WithOneToOneFieldParamsModel,
} from '@lib/backend/resource/utils/withOneToOneField/withOneToOneField.models';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';

export const withOneToOneField =
  <TType extends unknown>({
    Resource,
    isDatabase = true,
    isOptional = true,
    root,
  }: WithOneToOneFieldParamsModel<TType>): WithOneToOneFieldModel =>
  (target, propertyKey) =>
    withRefField({
      Resource,
      isDatabase,
      isOptional,
      relation: FIELD_RELATION.ONE_TO_ONE,
      root,
    })(target, propertyKey);

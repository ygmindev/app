import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const withRefField =
  <TType extends unknown>({
    Resource,
    isOptional = false,
    name,
  }: WithRefFieldParamsModel<TType>): WithRefFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      isOptional,
      isRepository: true,
      name,
      relation: FIELD_RELATION.MANY_TO_ONE,
      type: PROPERTY_TYPE.RESOURCE,
    })(target, propertyKey);

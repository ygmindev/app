import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const withRefField =
  <TType extends unknown>({
    Resource,
    inversedBy,
    isArray = false,
    isDatabase = false,
    isOptional = true,
    mappedBy,
    name,
    relation,
  }: WithRefFieldParamsModel<TType>): WithRefFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      inversedBy,
      isArray,
      isDatabase,
      isOptional,
      mappedBy,
      name,
      relation,
      type: PROPERTY_TYPE.RESOURCE,
    })(target, propertyKey);

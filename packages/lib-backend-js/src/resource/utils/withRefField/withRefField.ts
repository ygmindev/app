import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const withRefField =
  <TType extends unknown>({
    Resource,
    isArray = false,
    isDatabase = false,
    isOptional = true,
    leaf,
    name,
    relation,
    root,
  }: WithRefFieldParamsModel<TType>): WithRefFieldModel =>
  (target, propertyKey) =>
    withField({
      Resource,
      isArray,
      isDatabase,
      isOptional,
      leaf,
      name,
      relation,
      root,
      type: PROPERTY_TYPE.RESOURCE,
    })(target, propertyKey);

import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  type WithRefFieldModel,
  type WithRefFieldParamsModel,
} from '@lib/backend/resource/utils/withRefField/withRefField.models';

export const withRefField =
  <TType extends unknown>({
    Resource,
    isArray = false,
    isDatabase = false,
    isOptional = true,
    leaf,
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
      relation,
      root,
    })(target, propertyKey);

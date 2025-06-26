import { cleanObject as cleanObjectBase } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '@lib/shared/core/utils/cleanObject/cleanObject.models';

export const cleanObject = <TType extends unknown>(
  ...[value, options, depth]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> => cleanObjectBase(value, options, depth);

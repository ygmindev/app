import { ObjectId } from 'mongodb';

import { cleanObject as cleanObjectBase } from '#lib-shared/core/utils/cleanObject/cleanObject.base';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '#lib-shared/core/utils/cleanObject/cleanObject.models';

export const cleanObject = <TType extends unknown>(
  ...[value, options]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> =>
  cleanObjectBase(value, {
    ...options,
    primitiveTypes: [...(options?.primitiveTypes ?? []), ObjectId],
  });

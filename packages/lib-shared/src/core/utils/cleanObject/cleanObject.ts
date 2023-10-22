import { toPlainObject } from 'lodash';
import { ObjectId } from 'mongodb';

import { cleanObject as cleanObjectBase } from '#lib-shared/core/utils/cleanObject/cleanObject.base';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '#lib-shared/core/utils/cleanObject/cleanObject.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const cleanObject = <TType extends unknown>(
  ...[value, options]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> =>
  cleanObjectBase(value, {
    ...options,
    objectTransformer: (v) => {
      const { beforeCreate } = v as EntityResourceModel;
      beforeCreate && void beforeCreate.bind(v)();
      return toPlainObject(v) as typeof v;
    },
    primitiveTypes: [...(options?.primitiveTypes ?? []), ObjectId],
  });

import { cleanObject as cleanObjectBase } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '@lib/shared/core/utils/cleanObject/cleanObject.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import toPlainObject from 'lodash/toPlainObject';
import { ObjectId } from 'mongodb';

export const cleanObject = <TType extends unknown>(
  ...[value, options, depth]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> =>
  cleanObjectBase(
    value,
    {
      ...options,
      objectTransformer: (v) => {
        const { beforeCreate } = v as EntityResourceModel;
        void beforeCreate?.bind(v)();
        return toPlainObject(v) as typeof v;
      },
      primitiveTypes: [...(options?.primitiveTypes ?? []), ObjectId],
    },
    depth,
  );

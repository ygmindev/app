import { createUnionType } from 'type-graphql';

import {
  type CreateUnionModel,
  type CreateUnionParamsModel,
} from '@lib/backend/resource/utils/createUnion/createUnion.models';
import { type ClassModel } from '@lib/shared/core/core.models';

export const createUnion = <TType extends unknown>({
  Resource,
  name,
  resolve,
}: CreateUnionParamsModel<TType>): CreateUnionModel<TType> =>
  createUnionType({
    name,
    resolveType: resolve ? (value) => resolve(value as TType) : undefined,
    types: () => Resource as Array<ClassModel>,
  }) as unknown as CreateUnionModel<TType>;

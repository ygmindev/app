import { createUnionType } from 'type-graphql';

import {
  type CreateUnionModel,
  type CreateUnionParamsModel,
} from '#lib-backend/resource/utils/createUnion/createUnion.models';

export const createUnion = <TType>({
  Resource,
  name,
  resolve,
}: CreateUnionParamsModel<TType>): CreateUnionModel<TType> =>
  createUnionType({
    name,
    resolveType: resolve ? (value) => resolve(value as TType) : undefined,
    types: () => Resource,
  }) as CreateUnionModel<TType>;

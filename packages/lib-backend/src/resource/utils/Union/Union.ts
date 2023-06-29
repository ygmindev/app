import { createUnionType } from 'type-graphql';

import { type UnionParamsModel } from '#lib-backend/resource/utils/Union/Union.models';
import { type ClassModel } from '#lib-shared/core/core.models';

export const Union = <TType>({
  Resource,
  name,
  resolve,
}: UnionParamsModel<TType>): ClassModel<TType> =>
  createUnionType({
    name,
    resolveType: (value) => resolve(value as TType),
    types: () => Resource,
  }) as ClassModel<TType>;

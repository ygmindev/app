import { createUnionType } from 'type-graphql';

import type { UnionParamsModel } from '#lib-backend/resource/utils/Union/Union.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';

export const Union = <TType>({
  Resource,
  name,
  resolve,
}: UnionParamsModel<TType>): ConstructorModel<TType> =>
  createUnionType({
    name,
    resolveType: (value) => resolve(value as TType),
    types: () => Resource,
  }) as ConstructorModel<TType>;

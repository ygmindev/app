import { useGraphql } from '@lib/frontend/data/hooks/useGraphql/useGraphql';
import {
  type UseResourceQueryModel,
  type UseResourceQueryParamsModel,
} from '@lib/frontend/resource/hooks/useResourceQuery/useResourceQuery.models';
import { resourceQuery } from '@lib/shared/graphql/utils/resourceQuery/resourceQuery';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const useResourceQuery = <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
  after,
  before,
  fields,
  method,
  name,
  root,
}: UseResourceQueryParamsModel<TMethod, TType, TRoot>): UseResourceQueryModel<
  TMethod,
  TType,
  TRoot
> => {
  const { query } = useGraphql();
  return {
    query: async (input) =>
      resourceQuery({
        after,
        before,
        fields,
        input,
        method,
        name,
        onQuery: query,
        root,
      }),
  };
};

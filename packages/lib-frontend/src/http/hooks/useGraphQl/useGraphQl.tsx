// import type {
//   UseGraphQlModel,
//   UseGraphQlParamsModel,
// } from '#lib-frontend/http/hooks/useGraphQl/useGraphQl.models';

// export const { useGraphQl }: { useGraphQl: (params?: UseGraphQlParamsModel) => UseGraphQlModel } =
//   // import.meta.env.SSR ? await import('./useGraphQl.server') : await import('./useGraphQl.client');
//   await import('./useGraphQl.client');

import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import type {
  UseGraphQlModel,
  UseGraphQlParamsModel,
} from '#lib-frontend/http/hooks/useGraphQl/useGraphQl.models';
import { graphQlQuery } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery';
import type {
  GraphQlHttpParamsModel,
  GraphQlHttpResponseModel,
  GraphQlQueryHttpParamsModel,
} from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { GRAPHQL } from '#lib-shared/graphql/graphql.constants';

export const useGraphQl = (params: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  console.warn(`@@@ ${'CLIENT'}`);
  const { post } = useApi({ ...params, path: `api/${GRAPHQL}` });
  return {
    query: async <TParams, TResult, TName extends string = string>({
      fields,
      name,
      params: queryParams,
      type,
      variables,
    }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      const result = await post<
        GraphQlHttpParamsModel<TParams>,
        GraphQlHttpResponseModel<TResult, TName>
      >({
        params: {
          query: graphQlQuery<TParams, TResult, TName>({ fields, name, params: queryParams, type }),
          variables: cleanObject(variables),
        },
        path: '',
      });
      return (result && result.data && result.data[name]) || null;
    },
  };
};

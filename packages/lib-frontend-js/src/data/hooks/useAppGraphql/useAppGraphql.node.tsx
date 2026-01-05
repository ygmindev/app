import { graphqlConfig } from '@lib/config/graphql/graphql.main';
import { useAppGraphql as useAppGraphqlBase } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
import {
  type UseAppGraphqlModel,
  type UseAppGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';
import {
  type GraphqlHttpResponseModel,
  type GraphqlParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';
import { graphql } from 'graphql';

export const useAppGraphql = ({ ...params }: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel => {
  const context = useRootContext();
  console.warn('@@@ ROOT CONTEXT:');
  console.warn(context);
  return useAppGraphqlBase({
    ...params,
    query: async <TResult, TParams, TName extends string = string>({
      query,
      variables,
    }: GraphqlParamsModel<TParams>) =>
      graphql({
        schema: graphqlConfig.config(),
        source: query,
        variableValues: variables as Record<string, unknown>,
      }) as GraphqlHttpResponseModel<TResult, TName>,
  });
};

// import { graphqlConfig } from '@lib/config/graphql/graphql.main';
// import { useAppGraphql as useAppGraphqlBase } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
// import {
//   type UseAppGraphqlModel,
//   type UseAppGraphqlParamsModel,
// } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';
// import {
//   type GraphqlHttpResponseModel,
//   type GraphqlParamsModel,
// } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
// import { graphql } from 'graphql';

// export const useAppGraphql = ({ ...params }: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel =>
//   useAppGraphqlBase({
//     ...params,
//     query: async <TResult, TParams, TName extends string = string>({
//       query,
//       variables,
//     }: GraphqlParamsModel<TParams>) =>
//       graphql({
//         schema: graphqlConfig.config(),
//         source: query,
//         variableValues: variables as Record<string, unknown>,
//       }) as GraphqlHttpResponseModel<TResult, TName>,
//   });

import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useQueryClient } from '@lib/frontend/data/hooks/useQueryClient/useQueryClient';
import { graphqlQuery } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery';
import { type GraphqlHttpResponseModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import {
  type UseGraphqlSseModel,
  type UseGraphqlSseParamsModel,
} from '@lib/frontend/http/hooks/useGraphqlSse/useGraphqlSse.models';
import { useSse } from '@lib/frontend/http/hooks/useSse/useSse';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { useMemo } from 'react';

export const useGraphqlSse = <
  TResult,
  TParams,
  TName extends string = string,
  TStreaming extends boolean = false,
>({
  fields,
  id,
  isStreaming,
  name,
  params,
  uri,
  variables,
}: UseGraphqlSseParamsModel<TResult, TParams, TName, TStreaming>): UseGraphqlSseModel<
  TResult,
  TStreaming
> => {
  const queryClient = useQueryClient();
  const paramsF = useMemo(
    () => ({
      query: graphqlQuery<TResult, TParams, TName>({
        fields,
        name,
        params,
        type: GRAPHQL_OPERATION_TYPE.SUBSCRIPTION,
      }),
      variables: variables && cleanObject(variables),
    }),
    [fields, name, params, variables],
  );
  const { isOpen } = useSse({
    handlers: {
      next: (e: GraphqlHttpResponseModel<TResult, TName>) => {
        const data = e?.data?.[name] ?? null;
        void queryClient.set(
          [id, paramsF],
          isStreaming ? (prev?: Array<TResult>) => [...(prev ?? []), data] : data,
        );
      },
    },
    onError: (error) => logger.error(error),
    uri: { ...uri, params: paramsF },
  });

  const { data } = useQuery(
    id,
    async () => (isStreaming ? ([] as Array<TResult>) : null),
    paramsF,
    { initialData: isStreaming ? [] : null },
  );

  return {
    data,
    isOpen,
  } as UseGraphqlSseModel<TResult, TStreaming>;
};

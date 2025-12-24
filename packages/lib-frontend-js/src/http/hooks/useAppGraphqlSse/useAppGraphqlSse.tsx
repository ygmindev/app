import {
  type UseAppGraphqlSseModel,
  type UseAppGraphqlSseParamsModel,
} from '@lib/frontend/http/hooks/useAppGraphqlSse/useAppGraphqlSse.models';
import { useGraphqlSse } from '@lib/frontend/http/hooks/useGraphqlSse/useGraphqlSse';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const useAppGraphqlSse = <
  TResult,
  TParams,
  TName extends string = string,
  TStreaming extends boolean = false,
>({
  ...params
}: UseAppGraphqlSseParamsModel<TResult, TParams, TName, TStreaming>): UseAppGraphqlSseModel<
  TResult,
  TStreaming
> =>
  useGraphqlSse({
    ...params,
    uri: {
      host: process.env.SERVER_APP_HOST,
      pathname: `api/${GRAPHQL}`,
      port: process.env.SERVER_APP_PORT,
    },
  });

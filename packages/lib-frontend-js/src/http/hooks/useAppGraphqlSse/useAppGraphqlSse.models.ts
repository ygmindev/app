import {
  type UseGraphqlSseModel,
  type UseGraphqlSseParamsModel,
} from '@lib/frontend/http/hooks/useGraphqlSse/useGraphqlSse.models';

export type UseAppGraphqlSseParamsModel<
  TResult,
  TParams,
  TName extends string = string,
  TStreaming extends boolean = false,
> = Omit<UseGraphqlSseParamsModel<TResult, TParams, TName, TStreaming>, 'uri'>;

export type UseAppGraphqlSseModel<TResult, TStreaming extends boolean = false> = UseGraphqlSseModel<
  TResult,
  TStreaming
>;

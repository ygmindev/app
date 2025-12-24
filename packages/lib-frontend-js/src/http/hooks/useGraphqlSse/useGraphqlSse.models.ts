import { type UseQueryModel } from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { type GraphqlQueryHttpParamsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type UseGraphqlSseParamsModel<
  TResult,
  TParams,
  TName extends string = string,
  TStreaming extends boolean = false,
> = Pick<
  GraphqlQueryHttpParamsModel<TResult, TParams, TName>,
  'name' | 'fields' | 'params' | 'variables'
> & {
  id: string;
  isStreaming?: TStreaming;
  uri: UriModel;
};

export type UseGraphqlSseModel<TResult, TStreaming extends boolean = false> = Pick<
  UseQueryModel<TStreaming extends false ? TResult : Array<TResult>>,
  'data'
> & { isOpen?: boolean };

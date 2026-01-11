import {
  type UseAppGraphqlModel,
  type UseAppGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';
import { useGraphql } from '@lib/frontend/data/hooks/useGraphql/useGraphQl';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const useAppGraphql = ({ ...params }: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel =>
  useGraphql({
    ...params,
    host: process.env.SERVER_APP_HOST,
    pathname: `api/${GRAPHQL}`,
    port: process.env.PORT ?? process.env.SERVER_APP_PORT,
  });

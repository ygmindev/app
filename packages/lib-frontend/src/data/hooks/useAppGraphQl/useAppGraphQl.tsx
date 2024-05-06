import { type UseAppGraphQlModel } from '@lib/frontend/data/hooks/useAppGraphQl/useAppGraphQl.models';
import { useGraphQl } from '@lib/frontend/data/hooks/useGraphQl/useGraphQl';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const useAppGraphQl = (): UseAppGraphQlModel =>
  useGraphQl({
    host: process.env.SERVER_APP_HOST,
    pathname: `api/${GRAPHQL}`,
    port: process.env.SERVER_APP_PORT,
  });

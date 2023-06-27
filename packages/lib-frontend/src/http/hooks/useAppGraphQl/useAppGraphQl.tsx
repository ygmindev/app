import type { UseAppGraphQlModel } from '#lib-frontend/http/hooks/useAppGraphQl/useAppGraphQl.models';
import { useGraphQl } from '#lib-frontend/http/hooks/useGraphQl/useGraphQl';
import { GRAPHQL } from '#lib-shared/graphql/graphql.constants';

export const useAppGraphQl = (): UseAppGraphQlModel =>
  useGraphQl({
    host: process.env.APP_SERVER_API_HOST,
    path: `api/${GRAPHQL}`,
    port: process.env.APP_SERVER_API_PORT,
  });

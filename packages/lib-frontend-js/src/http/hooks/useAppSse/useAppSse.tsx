import {
  type UseAppSseModel,
  type UseAppSseParamsModel,
} from '@lib/frontend/http/hooks/useAppSse/useAppSse.models';
import { useSse } from '@lib/frontend/http/hooks/useSse/useSse';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';

export const useAppSse = ({ ...params }: UseAppSseParamsModel = {}): UseAppSseModel =>
  useSse({
    ...params,
    uri: async () => ({
      host: process.env.SERVER_APP_HOST,
      pathname: `api/${GRAPHQL}`,
      port: process.env.SERVER_APP_PORT,
    }),
  });

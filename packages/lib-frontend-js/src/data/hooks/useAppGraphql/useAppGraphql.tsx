import { useAppGraphql as useAppGraphqlBase } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
import {
  type UseAppGraphqlModel,
  type UseAppGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';

export const useAppGraphql = ({ ...params }: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel =>
  useAppGraphqlBase({ ...params });

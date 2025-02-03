import {
  type UseGraphqlModel,
  type UseGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useGraphql/useGraphql.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type UseAppGraphqlParamsModel = PartialModel<UseGraphqlParamsModel>;

export type UseAppGraphqlModel = UseGraphqlModel;

import { _matchRoutes } from '@lib/shared/route/utils/matchRoutes/_matchRoutes';
import {
  type MatchRoutesModel,
  type MatchRoutesParamsModel,
} from '@lib/shared/route/utils/matchRoutes/matchRoutes.models';

export const matchRoutes = ({ ...params }: MatchRoutesParamsModel): MatchRoutesModel =>
  _matchRoutes({ ...params });

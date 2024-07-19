import { _matchRoute } from '@lib/shared/route/utils/matchRoute/_matchRoute';
import {
type  MatchRouteModel,
  MatchRouteParamsModel,
} from '@lib/shared/route/utils/matchRoute/matchRoute.models';

export const matchRoute = ({ ...params }: MatchRouteParamsModel): MatchRouteModel => _matchRoute({ ...params });

import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type QueryContextModel } from '@lib/frontend/data/data.models';
import { type LocaleContextModel } from '@lib/frontend/locale/locale.models';
import { type RootStateContextModel } from '@lib/frontend/root/stores/rootStore.models';
import { type RouteContextModel } from '@lib/frontend/route/route.models';
import { type GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { type LOCALE } from '@lib/shared/locale/locale.constants';
import { type QUERY } from '@lib/shared/query/query.constants';
import { type ROUTE } from '@lib/shared/route/route.constants';
import { type STATE } from '@lib/shared/state/state.constants';

export type RootContextModel = {
  [GRAPHQL]?: GraphqlConfigModel;
  [LOCALE]?: LocaleContextModel;
  [QUERY]?: QueryContextModel;
  [ROUTE]?: RouteContextModel<unknown>;
  [STATE]?: RootStateContextModel;
};

export type RootContextPropsModel = {
  context?: RootContextModel;
};

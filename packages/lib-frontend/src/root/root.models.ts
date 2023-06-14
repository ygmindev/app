import type { LocaleContextModel } from '#lib-frontend/locale/locale.models';
import type { RootStateContextModel } from '#lib-frontend/root/stores/rootStore.models';
import type { RouteContextModel } from '#lib-frontend/route/route.models';
import type { LOCALE } from '#lib-shared/locale/locale.constants';
import type { ROUTE } from '#lib-shared/route/route.constants';
import type { STATE } from '#lib-shared/state/state.constants';

export interface RootContextModel {
  [LOCALE]?: LocaleContextModel;
  [ROUTE]?: RouteContextModel;
  [STATE]?: RootStateContextModel;
}

import { type TabModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { type RouteModel } from '#lib-frontend/route/route.models';

export type RouteTabsPropsModel = {
  routes?: Array<RouteTabModel>;
  value?: string;
};

export type RouteTabModel = Omit<TabModel, 'id'> & Pick<RouteModel, 'pathname'>;

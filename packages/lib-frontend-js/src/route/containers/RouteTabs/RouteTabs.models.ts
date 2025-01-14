import { type TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type RouteTabsPropsModel = TabsPropsModel & {
  depth?: number;
  routes: Array<RouteModel>;
};

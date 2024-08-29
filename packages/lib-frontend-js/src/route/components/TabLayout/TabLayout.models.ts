import { type TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type TabLayoutPropsModel = ChildrenPropsModel &
  Pick<TabsPropsModel, 'type'> & {
    route?: RouteModel;
  };

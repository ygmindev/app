import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { RouteTabsPropsModel } from '@lib/frontend/routing/containers/RouteTabs/RouteTabs.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { find } from 'lodash';

export const RouteTabs: SFCModel<RouteTabsPropsModel> = ({ tabs, ...props }) => {
  const { isActive, push } = useRouter();
  const currentTab = find(tabs, (tab) => isActive(tab.id));
  return (
    <Tabs
      {...props}
      onChange={push}
      tabs={tabs}
      value={currentTab ? currentTab.id : undefined}
    />
  );
};

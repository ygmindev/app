import { type TabsPropsModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { type NavigatorPropsModel } from '#lib-frontend/route/route.models';

export type TabNavigatorPropsModel = NavigatorPropsModel & Pick<TabsPropsModel, 'type'>;

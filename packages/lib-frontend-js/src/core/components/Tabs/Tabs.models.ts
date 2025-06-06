import { type TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type TabsPropsModel = ValuePropsModel & {
  isStickyCategory?: boolean;
  tabs?: Array<TabModel>;
  type?: TabsTypeModel;
};

export type TabModel = TranslatableOptionModel;

export type TabsTypeModel = `${TABS_TYPE}`;

import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { type TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<TabsPropsModel> = {
  Component: Tabs,
  defaultProps: {
    defaultValue: '1',
    tabs: [
      { id: '1', label: 'tab 1' },
      { id: '2', label: 'tab 2' },
      { id: '3', label: 'tab 3' },
    ],
  },
  variants: [
    ...cartesianObject({
      type: Object.values(TABS_TYPE),
    }).map((props) => ({ props })),
  ],
};

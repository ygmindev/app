import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { TabLayout } from '@lib/frontend/route/components/TabLayout/TabLayout';
import { type TabLayoutPropsModel } from '@lib/frontend/route/components/TabLayout/TabLayout.models';

export const props: LibraryPropsModel<TabLayoutPropsModel> = {
  Component: TabLayout,
  defaultProps: {},
  variants: [],
};

import { TabLayout } from '@lib/frontend/route/components/TabLayout/TabLayout';
import { type TabLayoutPropsModel } from '@lib/frontend/route/components/TabLayout/TabLayout.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TabLayoutPropsModel> = {
  Component: TabLayout,
  defaultProps: {},
  variants: [],
};

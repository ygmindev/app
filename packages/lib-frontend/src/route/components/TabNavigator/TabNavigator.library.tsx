import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type TabNavigatorPropsModel } from '#lib-frontend/route/components/TabNavigator/TabNavigator.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TabNavigatorPropsModel> = {
  Component: TabNavigator,
  defaultProps: {},
  variants: [],
};

import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { type VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<VirtualizedListPropsModel<MenuOptionModel>> = {
  Component: VirtualizedList,
  defaultProps: {
    items: MENU_FIXTURE_OPTIONS,
    render: ({ id }) => <WrapperFixture>{id}</WrapperFixture>,
  },
  variants: [],
};

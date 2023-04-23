import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import type { VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';

export const props: LibraryPropsModel<VirtualizedListPropsModel> = {
  Component: VirtualizedList,
  defaultProps: {},
  variants: [],
};

import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import type { VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<VirtualizedListPropsModel> = {
  Component: VirtualizedList,
  defaultProps: {},
  variants: [],
};

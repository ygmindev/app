import { ItemTable } from '@lib/frontend/data/components/ItemTable/ItemTable';
import { type ItemTablePropsModel } from '@lib/frontend/data/components/ItemTable/ItemTable.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ItemTablePropsModel> = {
  Component: ItemTable,
  defaultProps: {},
  variants: [],
};

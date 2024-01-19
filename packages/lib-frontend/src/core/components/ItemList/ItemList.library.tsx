import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { type ItemListPropsModel } from '@lib/frontend/core/components/ItemList/ItemList.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ItemListPropsModel> = {
  Component: ItemList,
  defaultProps: {},
  variants: [],
};

import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';
import { Item } from '@lib-frontend/core/components/Item/Item';
import { type ItemPropsModel } from '@lib-frontend/core/components/Item/Item.models';

export const props: LibraryPropsModel<ItemPropsModel> = {
  Component: Item,
  defaultProps: {},
  variants: [],
};

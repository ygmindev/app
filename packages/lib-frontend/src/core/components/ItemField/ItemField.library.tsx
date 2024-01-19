import { ItemField } from '@lib/frontend/core/components/ItemField/ItemField';
import { type ItemFieldPropsModel } from '@lib/frontend/core/components/ItemField/ItemField.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ItemFieldPropsModel> = {
  Component: ItemField,
  defaultProps: {},
  variants: [],
};

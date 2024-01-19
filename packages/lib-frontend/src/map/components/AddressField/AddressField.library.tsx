import { AddressField } from '@lib/frontend/map/components/AddressField/AddressField';
import { type AddressFieldPropsModel } from '@lib/frontend/map/components/AddressField/AddressField.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AddressFieldPropsModel> = {
  Component: AddressField,
  defaultProps: {},
  variants: [],
};

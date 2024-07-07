import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
import { type SavedPaymentMethodInputPropsModel } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<SavedPaymentMethodInputPropsModel> = {
  Component: SavedPaymentMethodInput,
  defaultProps: {},
  variants: [],
};

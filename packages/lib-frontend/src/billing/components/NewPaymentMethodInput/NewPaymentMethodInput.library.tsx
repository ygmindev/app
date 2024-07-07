import { NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput';
import { type NewPaymentMethodInputPropsModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<NewPaymentMethodInputPropsModel> = {
  Component: NewPaymentMethodInput,
  defaultProps: {},
  variants: [],
};

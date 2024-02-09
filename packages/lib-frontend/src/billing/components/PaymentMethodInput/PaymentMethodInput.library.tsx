import { PaymentMethodInput } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputPropsModel } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodInputPropsModel> = {
  Component: PaymentMethodInput,
  defaultProps: {},
  variants: [],
};

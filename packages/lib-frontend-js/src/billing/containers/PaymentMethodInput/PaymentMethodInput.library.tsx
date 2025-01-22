import { PaymentMethodInput } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputPropsModel } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodInputPropsModel> = {
  Component: PaymentMethodInput,
  defaultProps: {},
  variants: [],
};

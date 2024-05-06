import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PaymentMethodInput } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputPropsModel } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';

export const props: LibraryPropsModel<PaymentMethodInputPropsModel> = {
  Component: PaymentMethodInput,
  defaultProps: {},
  variants: [],
};

import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PaymentMethod } from '@lib/frontend/billing/components/PaymentMethod/PaymentMethod';
import type { PaymentMethodPropsModel } from '@lib/frontend/billing/components/PaymentMethod/PaymentMethod.models';

export const props: LibraryPropsModel<PaymentMethodPropsModel> = {
  Component: PaymentMethod,
  defaultProps: {},
  variants: [],
};

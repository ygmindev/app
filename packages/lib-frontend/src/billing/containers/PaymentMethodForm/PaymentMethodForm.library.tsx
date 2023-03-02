import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PaymentMethodForm } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm';
import type { PaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';

export const props: LibraryPropsModel<PaymentMethodFormPropsModel> = {
  Component: PaymentMethodForm,
  defaultProps: {},
  variants: [],
};

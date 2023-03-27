import { PaymentMethodItem } from '@lib/frontend/billing/components/PaymentMethodItem/PaymentMethodItem';
import type { PaymentMethodItemPropsModel } from '@lib/frontend/billing/components/PaymentMethodItem/PaymentMethodItem.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodItemPropsModel> = {
  Component: PaymentMethodItem,
  defaultProps: {},
  variants: [],
};

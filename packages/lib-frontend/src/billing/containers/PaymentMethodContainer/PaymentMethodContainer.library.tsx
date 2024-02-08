import { PaymentMethodContainer } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer';
import { type PaymentMethodContainerPropsModel } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PaymentMethodContainerPropsModel> = {
  Component: PaymentMethodContainer,
  defaultProps: {},
  variants: [],
};

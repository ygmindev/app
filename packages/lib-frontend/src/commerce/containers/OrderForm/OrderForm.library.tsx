import { OrderForm } from '@lib/frontend/commerce/containers/OrderForm/OrderForm';
import { type OrderFormPropsModel } from '@lib/frontend/commerce/containers/OrderForm/OrderForm.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<OrderFormPropsModel> = {
  Component: OrderForm,
  defaultProps: {},
  variants: [],
};

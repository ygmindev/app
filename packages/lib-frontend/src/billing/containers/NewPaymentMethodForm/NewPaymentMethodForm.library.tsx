import { NewPaymentMethodForm } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm';
import { type NewPaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<NewPaymentMethodFormPropsModel> = {
  Component: NewPaymentMethodForm,
  defaultProps: {},
  variants: [],
};

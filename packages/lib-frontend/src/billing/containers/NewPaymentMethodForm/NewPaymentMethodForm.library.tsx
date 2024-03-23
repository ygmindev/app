import { NewPaymentMethodForm } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm';
import { type NewPaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NewPaymentMethodFormPropsModel> = {
  Component: NewPaymentMethodForm,
  defaultProps: {},
  variants: [],
};

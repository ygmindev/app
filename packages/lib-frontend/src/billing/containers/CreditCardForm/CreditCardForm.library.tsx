import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { CreditCardForm } from '#lib-frontend/billing/containers/CreditCardForm/CreditCardForm';
import { type CreditCardFormPropsModel } from '#lib-frontend/billing/containers/CreditCardForm/CreditCardForm.models';

export const props: LibraryPropsModel<CreditCardFormPropsModel> = {
  Component: CreditCardForm,
  defaultProps: {},
  variants: [],
};

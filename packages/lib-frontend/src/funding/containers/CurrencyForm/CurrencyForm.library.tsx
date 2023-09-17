import { CurrencyForm } from '#lib-frontend/funding/containers/CurrencyForm/CurrencyForm';
import { type CurrencyFormPropsModel } from '#lib-frontend/funding/containers/CurrencyForm/CurrencyForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CurrencyFormPropsModel> = {
  Component: CurrencyForm,
  defaultProps: {},
  variants: [],
};

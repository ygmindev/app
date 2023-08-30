import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';

export const props: LibraryPropsModel<NumberFieldPropsModel> = {
  Component: NumberField,
  defaultProps: {},
  variants: [],
};

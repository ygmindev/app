import { NumberRangeField } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField';
import { type NumberRangeFieldPropsModel } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NumberRangeFieldPropsModel> = {
  Component: NumberRangeField,
  defaultProps: {},
  variants: [],
};

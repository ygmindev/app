import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { RangeField } from '#lib-frontend/data/components/RangeField/RangeField';
import { type RangeFieldPropsModel } from '#lib-frontend/data/components/RangeField/RangeField.models';

export const props: LibraryPropsModel<RangeFieldPropsModel> = {
  Component: RangeField,
  defaultProps: {},
  variants: [],
};

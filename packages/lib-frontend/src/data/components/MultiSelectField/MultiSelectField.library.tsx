import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { MultiSelectField } from '#lib-frontend/data/components/MultiSelectField/MultiSelectField';
import { type MultiSelectFieldPropsModel } from '#lib-frontend/data/components/MultiSelectField/MultiSelectField.models';

export const props: LibraryPropsModel<MultiSelectFieldPropsModel> = {
  Component: MultiSelectField,
  defaultProps: {},
  variants: [],
};

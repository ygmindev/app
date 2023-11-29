import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FilterButton } from '#lib-frontend/data/components/FilterButton/FilterButton';
import { type FilterButtonPropsModel } from '#lib-frontend/data/components/FilterButton/FilterButton.models';

export const props: LibraryPropsModel<FilterButtonPropsModel> = {
  Component: FilterButton,
  defaultProps: {},
  variants: [],
};

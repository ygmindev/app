import { FilterButton } from '@lib/frontend/data/components/FilterButton/FilterButton';
import { type FilterButtonPropsModel } from '@lib/frontend/data/components/FilterButton/FilterButton.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FilterButtonPropsModel> = {
  Component: FilterButton,
  defaultProps: {},
  variants: [],
};

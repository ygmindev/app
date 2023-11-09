import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { type FilterContainerPropsModel } from '#lib-frontend/data/components/FilterContainer/FilterContainer.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FilterContainerPropsModel> = {
  Component: FilterContainer,
  defaultProps: {},
  variants: [],
};

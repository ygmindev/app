import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FilterGroup } from '#lib-frontend/data/components/FilterGroup/FilterGroup';
import { type FilterGroupPropsModel } from '#lib-frontend/data/components/FilterGroup/FilterGroup.models';

export const props: LibraryPropsModel<FilterGroupPropsModel> = {
  Component: FilterGroup,
  defaultProps: {},
  variants: [],
};

import { SearchField } from '@lib/frontend/search/components/SearchField/SearchField';
import type { SearchFieldPropsModel } from '@lib/frontend/search/components/SearchField/SearchField.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SearchFieldPropsModel> = {
  Component: SearchField,
  category: 'search',
  defaultProps: {},
  variants: [],
};

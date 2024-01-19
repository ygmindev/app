import { SearchInput } from '@lib/frontend/search/components/SearchInput/SearchInput';
import { type SearchInputPropsModel } from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SearchInputPropsModel> = {
  Component: SearchInput,
  category: 'search',
  defaultProps: {},
  variants: [],
};

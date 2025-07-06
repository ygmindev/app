import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SearchInputCompact } from '@lib/frontend/search/components/SearchInputCompact/SearchInputCompact';
import { type SearchInputCompactPropsModel } from '@lib/frontend/search/components/SearchInputCompact/SearchInputCompact.models';

export const props: LibraryPropsModel<SearchInputCompactPropsModel> = {
  Component: SearchInputCompact,
  defaultProps: {
    onSearch: async () => [],
  },
  variants: [],
};

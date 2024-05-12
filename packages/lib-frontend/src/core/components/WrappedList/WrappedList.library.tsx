import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { type WrappedListPropsModel } from '@lib/frontend/core/components/WrappedList/WrappedList.models';

export const props: LibraryPropsModel<WrappedListPropsModel> = {
  Component: WrappedList,
  defaultProps: {},
  variants: [],
};

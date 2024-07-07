import { FocusableWrapper } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper';
import { type FocusableWrapperPropsModel } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<FocusableWrapperPropsModel> = {
  Component: FocusableWrapper,
  defaultProps: {},
  variants: [],
};

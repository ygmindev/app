import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FocusableWrapper } from '#lib-frontend/data/components/FocusableWrapper/FocusableWrapper';
import { type FocusableWrapperPropsModel } from '#lib-frontend/data/components/FocusableWrapper/FocusableWrapper.models';

export const props: LibraryPropsModel<FocusableWrapperPropsModel> = {
  Component: FocusableWrapper,
  defaultProps: {},
  variants: [],
};

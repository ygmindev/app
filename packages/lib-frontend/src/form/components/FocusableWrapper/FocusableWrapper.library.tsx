import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FocusableWrapper } from '#lib-frontend/form/components/FocusableWrapper/FocusableWrapper';
import { type FocusableWrapperPropsModel } from '#lib-frontend/form/components/FocusableWrapper/FocusableWrapper.models';

export const props: LibraryPropsModel<FocusableWrapperPropsModel> = {
  Component: FocusableWrapper,
  defaultProps: {},
  variants: [],
};

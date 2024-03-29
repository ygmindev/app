import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type AsyncBoundaryPropsModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AsyncBoundaryPropsModel> = {
  Component: AsyncBoundary,
  defaultProps: {},
  variants: [],
};

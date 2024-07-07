import { ConnectionBoundary } from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary';
import { type ConnectionBoundaryPropsModel } from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ConnectionBoundaryPropsModel> = {
  Component: ConnectionBoundary,
  defaultProps: {},
  variants: [],
};

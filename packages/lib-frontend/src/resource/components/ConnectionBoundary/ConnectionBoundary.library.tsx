import { ConnectionBoundary } from '@lib/frontend/resource/components/ConnectionBoundary/ConnectionBoundary';
import { type ConnectionBoundaryPropsModel } from '@lib/frontend/resource/components/ConnectionBoundary/ConnectionBoundary.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ConnectionBoundaryPropsModel> = {
  Component: ConnectionBoundary,
  defaultProps: {},
  variants: [],
};

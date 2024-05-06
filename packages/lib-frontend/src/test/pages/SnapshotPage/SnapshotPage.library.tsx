import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { SnapshotPage } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage';
import { type SnapshotPagePropsModel } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage.models';

export const props: LibraryPropsModel<SnapshotPagePropsModel> = {
  defaultProps: {},
  Component: SnapshotPage,
  variants: [],
};

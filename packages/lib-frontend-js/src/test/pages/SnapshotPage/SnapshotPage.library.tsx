import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SnapshotPage } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage';
import { type SnapshotPagePropsModel } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage.models';

export const props: LibraryPropsModel<SnapshotPagePropsModel> = {
  Component: SnapshotPage,
  defaultProps: {},
  variants: [],
};

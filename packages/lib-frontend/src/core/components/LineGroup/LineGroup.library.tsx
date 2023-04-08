import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { LineGroup } from '@lib/frontend/core/components/LineGroup/LineGroup';
import type { LineGroupPropsModel } from '@lib/frontend/core/components/LineGroup/LineGroup.models';

export const props: LibraryPropsModel<LineGroupPropsModel> = {
  Component: LineGroup,
  defaultProps: {},
  variants: [],
};

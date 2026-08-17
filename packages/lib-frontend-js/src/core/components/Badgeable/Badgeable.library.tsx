import { Badgeable } from '@lib/frontend/core/components/Badgeable/Badgeable';
import { type BadgeablePropsModel } from '@lib/frontend/core/components/Badgeable/Badgeable.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<BadgeablePropsModel> = {
  Component: Badgeable,
  defaultProps: {},
  variants: [],
};

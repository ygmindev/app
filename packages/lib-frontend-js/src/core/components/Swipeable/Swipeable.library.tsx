import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Swipeable } from '@lib/frontend/core/components/Swipeable/Swipeable';
import { type SwipeablePropsModel } from '@lib/frontend/core/components/Swipeable/Swipeable.models';

export const props: LibraryPropsModel<SwipeablePropsModel> = {
  Component: Swipeable,
  defaultProps: {},
  variants: [],
};

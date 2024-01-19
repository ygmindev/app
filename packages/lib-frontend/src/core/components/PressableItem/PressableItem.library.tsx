import { PressableItem } from '@lib/frontend/core/components/PressableItem/PressableItem';
import { type PressableItemPropsModel } from '@lib/frontend/core/components/PressableItem/PressableItem.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PressableItemPropsModel> = {
  Component: PressableItem,
  defaultProps: {},
  variants: [],
};

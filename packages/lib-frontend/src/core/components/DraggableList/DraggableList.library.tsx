import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { DraggableList } from '@lib/frontend/core/components/DraggableList/DraggableList';
import { type DraggableListPropsModel } from '@lib/frontend/core/components/DraggableList/DraggableList.models';

export const props: LibraryPropsModel<DraggableListPropsModel> = {
  Component: DraggableList,
  defaultProps: {},
  variants: [],
};

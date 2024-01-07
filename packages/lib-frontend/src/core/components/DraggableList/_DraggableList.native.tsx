import { type _DraggableListPropsModel } from '#lib-frontend/core/components/DraggableList/_DraggableList.models';
import { type DraggableListProps } from 'DraggableList';
import { DraggableList } from 'DraggableList';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _DraggableList = composeComponent<_DraggableListPropsModel, DraggableListProps>({
  Component: DraggableList,

  getProps: ({ children }) => ({
    children,
  }),
});

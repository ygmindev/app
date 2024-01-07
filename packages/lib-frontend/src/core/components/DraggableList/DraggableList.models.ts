import {
  type _DraggableListPropsModel,
  type _DraggableListRefModel,
} from '#lib-frontend/core/components/DraggableList/_DraggableList.models';

export type DraggableListPropsModel<TType> = Omit<_DraggableListPropsModel<TType>, 'divider'>;

export type DraggableListRefModel = _DraggableListRefModel;

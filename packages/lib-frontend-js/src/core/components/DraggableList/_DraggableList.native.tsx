import { type _DraggableListPropsModel } from '@lib/frontend/core/components/DraggableList/_DraggableList.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';
import DragList from 'react-native-draglist';

export const _DraggableList = <TType extends WithIdModel>({
  render,
  value,
  ...props
}: SFCPropsModel<_DraggableListPropsModel<TType>>): ReactElement<
  SFCPropsModel<_DraggableListPropsModel<TType>>
> => {
  return (
    <DragList
      data={value}
      keyExtractor={({ id }: { id: string }) => id}
      onReordered={console.warn}
      renderItem={({
        item,
        onDragEnd,
        onDragStart,
      }: {
        item: TType;
        onDragEnd: () => void;
        onDragStart: () => void;
      }) => render({ handleDragEnd: onDragEnd, handleDragStart: onDragStart, item })}
    />
  );
};

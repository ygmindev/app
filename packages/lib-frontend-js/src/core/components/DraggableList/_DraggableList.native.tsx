import {
  type _DraggableListPropsModel,
  type _DraggableListRefModel,
} from '@lib/frontend/core/components/DraggableList/_DraggableList.models';
import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef } from 'react';
import DragList from 'react-native-draglist';

export const _DraggableList = forwardRef(
  <TType extends WithIdModel>(
    {
      divider,
      items,
      render,
      testID,
      ...props
    }: RSFCPropsModel<_DraggableListRefModel, _DraggableListPropsModel<TType>>,
    ref: ForwardedRef<_DraggableListRefModel>,
  ): ReactElement<RSFCPropsModel<_DraggableListRefModel, _DraggableListPropsModel<TType>>> => {
    const { styles } = useStyles({ props });
    return (
      <DragList
        data={items}
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
  },
);

import { type _DraggableListPropsModel } from '@lib/frontend/core/components/DraggableList/_DraggableList.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement, useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  type OnDragEndResponder,
} from 'react-beautiful-dnd';

export const _DraggableList = <TType extends WithIdModel>({
  anchor,
  onChange,
  render,
  spacing,
  value,
}: SFCPropsModel<_DraggableListPropsModel<TType>>): ReactElement<
  SFCPropsModel<_DraggableListPropsModel<TType>>
> => {
  const [isRendered, isRenderedSet] = useState<boolean>();
  useEffect(() => {
    isRenderedSet(true);
  }, []);

  const handleDragEnd: OnDragEndResponder = ({ destination, source }) => {
    if (value && destination) {
      const valueF = value;
      const [removed] = valueF.splice(source.index, 1);
      valueF.splice(destination.index, 0, removed);
      onChange && onChange(valueF);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {isRendered && (
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {value?.map((item, index) => (
                <Draggable
                  draggableId={item.id}
                  index={index}
                  key={item.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        ...provided.draggableProps.style,
                        marginTop: index > 0 ? spacing : undefined,
                      }}>
                      {render({
                        anchor: (
                          <div {...provided.dragHandleProps}>{anchor(snapshot.isDragging)}</div>
                        ),
                        i: index,
                        isActive: snapshot.isDragging,
                        item,
                      })}
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
};

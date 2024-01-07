import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef } from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';

import {
  type _DraggableListPropsModel,
  type _DraggableListRefModel,
} from '#lib-frontend/core/components/DraggableList/_DraggableList.models';
import { type RSFCPropsModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

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
      <DraggableFlatList<TType>
        ItemSeparatorComponent={divider ? () => divider : undefined}
        contentContainerStyle={{ flex: 1 }}
        data={items}
        keyExtractor={({ id }) => id}
        ref={ref}
        renderItem={({ drag, isActive, item }) => render({ handleDrag: drag, isActive, item })}
        scrollEnabled
        style={styles}
        testID={testID}
      />
    );
  },
);

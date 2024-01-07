import { type ReactElement } from 'react';
import { type FlatList } from 'react-native-gesture-handler';

export type _DraggableListPropsModel<TType> = {
  divider?: ReactElement;
  items: Array<TType>;
  render(params: { handleDrag: () => void; isActive: boolean; item: TType }): ReactElement;
};

export type _DraggableListRefModel = FlatList;

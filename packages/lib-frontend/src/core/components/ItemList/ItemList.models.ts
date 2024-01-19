import { type PressableItemPropsModel } from '@lib/frontend/core/components/PressableItem/PressableItem.models';
import { type TilePropsModel } from '@lib/frontend/core/components/Tile/Tile.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type ItemListPropsModel<TType extends WithIdModel> = Pick<TilePropsModel, 'title'> & {
  emptyString?: TranslatableTextModel;
  isSearchable?: boolean;
  items?: Array<TType & PressableItemPropsModel>;
  rightElement?(params: { isActive?: boolean; item: TType }): ReactElement;
};

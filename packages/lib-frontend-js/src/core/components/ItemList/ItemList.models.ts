import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { type TilePropsModel } from '@lib/frontend/core/components/Tile/Tile.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type ItemListPropsModel<TType extends WithIdModel> = Pick<TilePropsModel, 'title'> & {
  emptyString?: AsyncTextModel;
  isSearchable?: boolean;
  items?: Array<TType & PressableTitlePropsModel>;
  rightElement?(params: { isActive?: boolean; item: TType }): ReactElement;
};

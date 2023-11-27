import { type ReactElement } from 'react';

import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type TilePropsModel } from '#lib-frontend/core/components/Tile/Tile.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type LineGroupPropsModel = ChildrenPropsModel<
  ReactElement<LineItemPropsModel> | Array<ReactElement<LineItemPropsModel>> | null
> &
  Pick<TilePropsModel, 'title'> & {
    emptyString?: TranslatableTextModel;
  };

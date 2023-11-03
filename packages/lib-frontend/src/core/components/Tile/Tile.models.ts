import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type TilePropsModel = ChildrenPropsModel &
  WithIconPropsModel &
  Pick<PressablePropsModel, 'onPress'> &
  Pick<LineItemPropsModel, 'rightElement'> & {
    description?: TranslatableTextModel | ReactElement;
    image?: string;
    isBorder?: boolean;
    onPressTooltip?: TranslatableTextModel;
    title?: TranslatableTextModel;
  };

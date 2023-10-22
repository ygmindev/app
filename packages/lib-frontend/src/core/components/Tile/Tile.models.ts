import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type TilePropsModel = ChildrenPropsModel &
  WithIconPropsModel &
  Pick<PressablePropsModel, 'onPress'> & {
    description?: TranslatableTextModel | ReactElement;
    image?: string;
    isBorder?: boolean;
    onPressTooltip?: TranslatableTextModel;
    title?: TranslatableTextModel;
  };

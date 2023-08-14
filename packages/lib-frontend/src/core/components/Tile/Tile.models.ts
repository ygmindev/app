import { type ReactElement } from 'react';

import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type TilePropsModel = ChildrenPropsModel &
  Pick<IconPropsModel, 'icon'> &
  Pick<PressablePropsModel, 'onPress'> & {
    description?: TranslatableTextModel | ReactElement;
    isBorder?: boolean;
    onPressTooltip?: TranslatableTextModel;
    preview?: ReactElement;
    title?: TranslatableTextModel;
  };

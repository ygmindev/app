import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type LineItemPropsModel = ChildrenPropsModel<ReactElement | TranslatableTextModel> &
  ElementStatePropsModel &
  Pick<PressablePropsModel, 'onPress'> &
  WithIconPropsModel & {
    button?(isOpen?: boolean): ReactElement;
    image?: string;
    isBorder?: boolean;
    label?: TranslatableTextModel;
    rightElement?: ReactElement;
  };

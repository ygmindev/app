import { type ReactElement } from 'react';

import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type LineItemPropsModel = {
  label?: TranslatableTextModel;
  rightElement?(isOpen?: boolean): ReactElement;
  value?: string | null;
} & ChildrenPropsModel &
  ElementStatePropsModel &
  Pick<PressablePropsModel, 'onPress'> &
  Partial<Pick<IconPropsModel, 'icon'>>;

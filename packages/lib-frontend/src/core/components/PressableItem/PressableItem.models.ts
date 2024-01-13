import { type ReactElement } from 'react';

import { type ItemPropsModel } from '@lib-frontend/core/components/Item/Item.models';
import { type PressablePropsModel } from '@lib-frontend/core/components/Pressable/Pressable.models';
import { type ElementStatePropsModel } from '@lib-frontend/core/core.models';

export type PressableItemPropsModel = ElementStatePropsModel &
  Omit<ItemPropsModel, 'rightElement'> &
  Pick<PressablePropsModel, 'onPress'> & {
    rightElement?(isActive?: boolean): ReactElement;
  };

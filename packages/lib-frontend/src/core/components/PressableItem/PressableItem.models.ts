import { type ItemPropsModel } from '@lib/frontend/core/components/Item/Item.models';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type PressableItemPropsModel = ElementStatePropsModel &
  Omit<ItemPropsModel, 'leftElement' | 'rightElement'> &
  Pick<PressablePropsModel, 'onPress'> & {
    leftElement?(isActive?: boolean): ReactElement;
    rightElement?(isActive?: boolean): ReactElement;
  };

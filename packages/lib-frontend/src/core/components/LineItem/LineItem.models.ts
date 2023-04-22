import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ReactElement } from 'react';

export interface LineItemPropsModel
  extends ChildrenPropsModel,
    Pick<PressablePropsModel, 'onPress'>,
    Partial<Pick<IconPropsModel, 'icon'>> {
  rightElement?(isOpen?: boolean): ReactElement;
}

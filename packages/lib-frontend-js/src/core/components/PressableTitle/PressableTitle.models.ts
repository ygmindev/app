import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type PressableTitlePropsModel = ElementStatePropsModel &
  Omit<TitlePropsModel, 'leftElement' | 'rightElement'> &
  Pick<PressablePropsModel, 'onPress'> & {
    leftElement?(isActive?: boolean): ReactElement;
    rightElement?(isActive?: boolean): ReactElement;
  };

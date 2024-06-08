import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import {
  type WrapperPropsModel,
  type WrapperRefModel,
} from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ThemeColorModel } from '@lib/frontend/style/style.models';
import { type ReactElement } from 'react';

export type PressablePropsModel = ChildrenPropsModel<ReactElement> &
  Omit<WrapperPropsModel, 'children'> &
  AnimatablePropsModel &
  Pick<ActivatablePropsModel, 'onActive' | 'onInactive' | 'trigger'> & {
    confirmColor?: ThemeColorModel;
    confirmMessage?: AsyncTextModel;
  };

export type PressableRefModel = WrapperRefModel;

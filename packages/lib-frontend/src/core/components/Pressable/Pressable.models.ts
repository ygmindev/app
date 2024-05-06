import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type PressablePropsModel = ChildrenPropsModel<ReactElement> &
  Omit<WrapperPropsModel, 'children'> &
  AnimatablePropsModel &
  Pick<ActivatablePropsModel, 'onActive' | 'onInactive' | 'trigger'> & {
    confirmMessage?: AsyncTextModel;
  };

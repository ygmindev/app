import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ReactNode } from 'react';

export interface PressablePropsModel
  extends Omit<WrapperPropsModel, 'animation' | 'children'>,
    ChildrenPropsModel<(params: { isActive?: boolean; isLoading?: boolean }) => ReactNode> {
  animation?(isActive?: boolean): AnimationModel;
  confirmMessage?: TranslatableTextModel;
  isDisabled?: boolean;
  isLoading?: boolean;
  isPressed?: boolean;
}
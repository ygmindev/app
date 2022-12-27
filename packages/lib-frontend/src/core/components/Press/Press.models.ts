import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactNode } from 'react';

export interface PressPropsModel
  extends WithTestIdModel,
    Omit<WrapperPropsModel, 'children'>,
    WithChildrenPropsModel<ReactNode | ((isActive: boolean) => ReactNode)>,
    Pick<AnimatablePropsModel, 'from' | 'to'> {
  confirmMessage?: string;
  isDisabled?: boolean;
  isPressed?: boolean;
  onPress?: CallableModel;
  onPressIn?: CallableModel;
  onPressOut?: CallableModel;
}

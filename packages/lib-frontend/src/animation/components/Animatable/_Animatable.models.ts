import type { AnimatableTypeModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { MotiProps } from 'moti';

export interface _AnimatablePropsModel extends WithTestIdModel {
  delay?: number;
  duration?: number;
  from?: StyleModel;
  isInfinite?: boolean;
  onEnd?: CallableModel;
  to?: StyleModel;
  type?: AnimatableTypeModel;
}

export interface _AnimatableComponentPropsModel extends WithTestIdModel, MotiProps {}

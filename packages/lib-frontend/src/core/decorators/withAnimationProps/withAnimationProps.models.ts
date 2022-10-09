import type { StyleModel } from '@lib/frontend/styling/styling.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { RotateXTransform, RotateYTransform, RotateZTransform } from 'react-native';

export interface WithAnimationPropsModel {
  animation?: { from: StyleModel; to: StyleModel };
  delay?: number;
  duration?: number;
  onEnd?: CallableModel;
  onStart?: CallableModel;
  transition?: Array<
    keyof StyleModel | keyof RotateXTransform | keyof RotateYTransform | keyof RotateZTransform
  >;
}

import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import {
  type AsyncTextModel,
  type ChildrenPropsModel,
  type DimensionModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';
import { type ReactNode } from 'react';

export type ModalPropsModel = ChildrenPropsModel &
  DimensionModel &
  ElementStatePropsModel &
  Pick<AnimationModel, 'duration'> & {
    deviceHeight?: number;
    deviceWidth?: number;
    isFullSize?: boolean;
    isOpen?: boolean;
    onToggle?(value?: boolean): void;
    swipeThreshold?: number;
    title?: ReactNode | AsyncTextModel;
  };

export type ModalRefModel = {
  toggle(value?: boolean): void;
};

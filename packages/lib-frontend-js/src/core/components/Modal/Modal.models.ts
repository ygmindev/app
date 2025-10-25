import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import {
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
    isPortal?: boolean;
    title?: ReactNode | AsyncTextModel;
    onToggle?(value?: boolean): void;
  };

export type ModalRefModel = {
  toggle(value?: boolean): void;
};

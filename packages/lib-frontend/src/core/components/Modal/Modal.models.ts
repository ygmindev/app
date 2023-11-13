import { type ReactNode } from 'react';

import { type AnimationModel } from '#lib-frontend/animation/animation.models';
import {
  type ChildrenPropsModel,
  type DimensionModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';

export type ModalPropsModel = ChildrenPropsModel &
  DimensionModel &
  ElementStatePropsModel &
  Pick<AnimationModel, 'duration'> & {
    deviceHeight?: number;
    deviceWidth?: number;
    header?: ReactNode | string;
    isFullSize?: boolean;
    isOpen?: boolean;
    onToggle?(value?: boolean): void;
  };

export type ModalRefModel = {
  toggle(value?: boolean): void;
};

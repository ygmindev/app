import { type ReactNode } from 'react';

import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import {
  type ChildrenPropsModel,
  type DimensionModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export type ModalPropsModel = ChildrenPropsModel &
  DimensionModel &
  ElementStatePropsModel &
  Pick<AnimationModel, 'duration'> & {
    deviceHeight?: number;
    deviceWidth?: number;
    isFullSize?: boolean;
    isOpen?: boolean;
    onToggle?(value?: boolean): void;
    title?: ReactNode | TranslatableTextModel;
  };

export type ModalRefModel = {
  toggle(value?: boolean): void;
};

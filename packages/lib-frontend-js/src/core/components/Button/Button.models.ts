import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import {
  type PressablePropsModel,
  type PressableRefModel,
} from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import {
  type ChildrenPropsModel,
  type SizableMorePropsModel,
} from '@lib/frontend/core/core.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type ReactElement, type ReactNode } from 'react';

export type ButtonTypeModel = `${BUTTON_TYPE}`;

export type ButtonPropsModel = ChildrenPropsModel<ReactNode | AsyncTextModel> &
  AnimatablePropsModel &
  WithIconPropsModel &
  Pick<WrapperPropsModel, 'isShadow'> &
  SizableMorePropsModel &
  ThemeColorPropsModel &
  Pick<
    PressablePropsModel,
    | 'align'
    | 'confirmMessage'
    | 'fontAlign'
    | 'height'
    | 'isFocusable'
    | 'isFullWidth'
    | 'onActive'
    | 'onInactive'
    | 'onPress'
    | 'onPressIn'
    | 'onPressOut'
    | 'tooltip'
    | 'trigger'
  > & {
    description?: AsyncTextModel;
    leftElement?: ReactElement | null;
    rightElement?: ReactElement | null;
    type?: ButtonTypeModel;
  };

export type ButtonRefModel = PressableRefModel;

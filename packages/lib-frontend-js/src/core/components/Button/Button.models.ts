import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import {
  type PressablePropsModel,
  type PressableRefModel,
} from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import {
  type ChildrenPropsModel,
  type SizableMorePropsModel,
} from '@lib/frontend/core/core.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type ReactNode } from 'react';

export type ButtonPropsModel = ChildrenPropsModel<AsyncTextModel | ReactNode> &
  AnimatablePropsModel &
  WithIconPropsModel &
  Pick<WrapperPropsModel, 'isShadow'> &
  SizableMorePropsModel &
  ThemeColorPropsModel &
  Pick<TextPropsModel, 'casing'> &
  Pick<
    PressablePropsModel,
    | 'align'
    | 'confirmMessage'
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
    fontAlign?: FONT_ALIGN;
    imageSrc?: string;
    leftElement?: PressablePropsModel['children'];
    rightElement?: PressablePropsModel['children'];
    type?: BUTTON_TYPE;
  };

export type ButtonRefModel = PressableRefModel;

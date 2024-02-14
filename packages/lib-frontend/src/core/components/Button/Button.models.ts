import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type ChildrenPropsModel, type SizablePropsModel } from '@lib/frontend/core/core.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type ReactElement } from 'react';

export type ButtonTypeModel = `${BUTTON_TYPE}`;

export type ButtonPropsModel = ChildrenPropsModel<TranslatableTextModel> &
  AnimatablePropsModel &
  WithIconPropsModel &
  Pick<WrapperPropsModel, 'isShadow'> &
  SizablePropsModel &
  ThemeColorPropsModel &
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
    | 'trigger'
  > & {
    description?: TranslatableTextModel;
    leftElement?: ReactElement | null;
    rightElement?: ReactElement | null;
    type?: ButtonTypeModel;
  };

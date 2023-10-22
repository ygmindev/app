import { type ReactElement } from 'react';

import { type AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import { type BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { type WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ThemeColorModel, type ThemeSizeModel } from '#lib-frontend/style/style.models';

export type ButtonTypeModel = `${BUTTON_TYPE}`;

export type ButtonPropsModel = {
  color?: ThemeColorModel;
  leftElement?: ReactElement;
  size?: ThemeSizeModel;
  type?: ButtonTypeModel;
} & ChildrenPropsModel<TranslatableTextModel> &
  WithIconPropsModel &
  Pick<WrapperPropsModel, 'isShadow'> &
  AnimatablePropsModel &
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
  >;

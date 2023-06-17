import type { AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import type { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import type { IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import type { PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import type { ThemeColorModel, ThemeSizeModel } from '#lib-frontend/style/style.models';

export type ButtonTypeModel = `${BUTTON_TYPE}`;

export type ButtonPropsModel = {
  color?: ThemeColorModel;
  size?: ThemeSizeModel;
  type?: ButtonTypeModel;
} & ChildrenPropsModel<TranslatableTextModel> &
  Pick<IconPropsModel, 'icon'> &
  Pick<
    PressablePropsModel,
    | 'onPress'
    | 'onPressIn'
    | 'onPressOut'
    | 'confirmMessage'
    | 'isFocusable'
    | 'isFullWidth'
    | 'align'
  > &
  AnimatablePropsModel;

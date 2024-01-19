import { type PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import { _viewParams as _viewParamsBase } from '@lib/frontend/core/components/View/_View';
import {
  type _ViewPropsModel,
  type _ViewRefModel,
} from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';

export const _viewParams: ComposeComponentParamsModel<
  _ViewPropsModel,
  PressableProps,
  ViewStyleModel,
  _ViewRefModel
> = {
  Component: Pressable,

  getProps: ({ onPress, onPressIn, onPressOut, ...props }, ...params) => ({
    ...(_viewParamsBase.getProps && _viewParamsBase.getProps(props, ...params)),

    activeOpacity: 1,

    onPress: () => onPress && void onPress(),

    onPressIn: () => onPressIn && onPressIn(),

    onPressOut: () => onPressOut && onPressOut(),
  }),
};

export const _View = composeComponent<
  _ViewPropsModel,
  PressableProps,
  ViewStyleModel,
  _ViewRefModel
>(_viewParams);

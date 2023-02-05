import { _viewParams as _viewParamsBase } from '@lib/frontend/core/components/View/_View';
import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const _viewParams: ComposeComponentParamsModel<_ViewPropsModel, TouchableOpacityProps> = {
  Component: TouchableOpacity,

  getProps: ({ onPress, onPressIn, onPressOut, ...props }, ...params) => ({
    ...(_viewParamsBase.getProps && _viewParamsBase.getProps(props, ...params)),

    activeOpacity: 1,

    onPress: () => onPress && onPress(),

    onPressIn: () => onPressIn && onPressIn(),

    onPressOut: () => onPressOut && onPressOut(),
  }),
};

export const _View = composeComponent<_ViewPropsModel, TouchableOpacityProps>(_viewParams);

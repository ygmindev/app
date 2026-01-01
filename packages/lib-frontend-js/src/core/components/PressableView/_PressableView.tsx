import { type _PressableViewPropsModel } from '@lib/frontend/core/components/PressableView/_PressableView.models';
import { getViewParams as getViewParamsBase } from '@lib/frontend/core/components/View/_View';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComponentType } from 'react';
import { type PressableProps } from 'react-native';
import { Pressable } from 'react-native';

const viewParamsBase = getViewParamsBase();

export const _PressableView = composeComponent<_PressableViewPropsModel, PressableProps>({
  Component: Pressable as ComponentType<PressableProps>,

  getProps: ({ onPress, ...props }, ...params) => ({
    ...(viewParamsBase.getProps?.(props, ...params) ?? {}),

    activeOpacity: 1,

    onPress: () => onPress?.(),
  }),
});

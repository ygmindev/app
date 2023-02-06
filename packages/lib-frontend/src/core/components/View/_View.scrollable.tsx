import { _viewParams as _viewParamsBase } from '@lib/frontend/core/components/View/_View';
import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { View } from '@lib/frontend/core/components/View/View';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { Fragment } from 'react';
import type { ViewProps } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export const _viewParams: ComposeComponentParamsModel<_ViewPropsModel, ViewProps> = {
  Component: Fragment,

  getProps: (
    { isHorizontalScrollable, isVerticalScrollable, onScroll, style, ...props },
    ...params
  ) => {
    const { flex, flexBasis, flexGrow, flexShrink, height, width, ...containerStyle } =
      StyleSheet.flatten(style);
    return {
      children: (
        <View style={{ flex, flexBasis, flexGrow, flexShrink, height, width }}>
          <ScrollView
            {...(_viewParamsBase.getProps && _viewParamsBase.getProps(props, ...params))}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            contentContainerStyle={containerStyle}
            horizontal={isHorizontalScrollable}
            onScroll={
              onScroll
                ? ({ nativeEvent }) =>
                    onScroll({ x: nativeEvent.contentOffset.x, y: nativeEvent.contentOffset.y })
                : undefined
            }
            scrollEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={isHorizontalScrollable || undefined}
            showsVerticalScrollIndicator={isVerticalScrollable || undefined}
          />
        </View>
      ),
    };
  },
};

export const _View = composeComponent<_ViewPropsModel, ViewProps>(_viewParams);

import { _viewParams as _viewParamsBase } from '#lib-frontend/core/components/View/_View';
import type {
  _ViewPropsModel,
  _ViewRefModel,
} from '#lib-frontend/core/components/View/_View.models';
import { View } from '#lib-frontend/core/components/View/View';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '#lib-frontend/core/utils/composeComponent/composeComponent.models';
import type { ViewStyleModel } from '#lib-frontend/style/style.models';
import { Fragment } from 'react';
import type { ViewProps } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export const _viewParams: ComposeComponentParamsModel<
  _ViewPropsModel,
  ViewProps,
  ViewStyleModel,
  _ViewRefModel
> = {
  Component: Fragment,

  getProps: (
    { isHorizontalScrollable, isVerticalScrollable, onScroll, style, testID, ...props },
    theme,
    ref,
  ) => {
    const { height, width, ...containerStyle } = StyleSheet.flatten(style);
    return {
      children: (
        <View
          style={{ display: 'flex', flex: width || height ? undefined : 1, height, width }}
          testID={testID}>
          <ScrollView
            {...(_viewParamsBase.getProps && _viewParamsBase.getProps(props, theme, ref))}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{ ...containerStyle, flexGrow: 1 }}
            horizontal={isHorizontalScrollable}
            onScroll={
              onScroll
                ? ({ nativeEvent }) =>
                    onScroll({ x: nativeEvent.contentOffset.x, y: nativeEvent.contentOffset.y })
                : undefined
            }
            ref={ref}
            scrollEnabled
            scrollEventThrottle={16}
            scrollToOverflowEnabled
            showsHorizontalScrollIndicator={isHorizontalScrollable || undefined}
            showsVerticalScrollIndicator={isVerticalScrollable || undefined}
          />
        </View>
      ),
    };
  },
};

export const _View = composeComponent<_ViewPropsModel, ViewProps, ViewStyleModel, _ViewRefModel>(
  _viewParams,
);

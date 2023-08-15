import { Fragment } from 'react';
import { type ViewProps } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

import { _viewParams as _viewParamsBase } from '#lib-frontend/core/components/View/_View';
import {
  type _ViewPropsModel,
  type _ViewRefModel,
} from '#lib-frontend/core/components/View/_View.models';
import { View } from '#lib-frontend/core/components/View/View';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '#lib-frontend/core/utils/composeComponent/composeComponent.models';
import { type ViewStyleModel } from '#lib-frontend/style/style.models';
import { partionObject } from '#lib-shared/core/utils/partionObject/partionObject';

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
    const [stylesView, stylesContainer] = partionObject(
      StyleSheet.flatten(style) as Record<string, unknown>,
      (_, k) => ['height', 'width'].includes(k) || k.startsWith('margin') || k.startsWith('border'),
    );
    return {
      children: (
        <View
          style={{
            display: 'flex',
            flex:
              stylesView.width || stylesView.height
                ? undefined
                : isVerticalScrollable
                ? 1
                : undefined,
            ...stylesView,
          }}
          testID={testID}>
          <ScrollView
            {...(_viewParamsBase.getProps && _viewParamsBase.getProps(props, theme, ref))}
            {...(isHorizontalScrollable ? { showsHorizontalScrollIndicator: true } : {})}
            {...(isVerticalScrollable ? { showsVerticalScrollIndicator: true } : {})}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{ ...stylesContainer, flexGrow: 1 }}
            horizontal={isHorizontalScrollable ?? false}
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
          />
        </View>
      ),
    };
  },
};

export const _View = composeComponent<_ViewPropsModel, ViewProps, ViewStyleModel, _ViewRefModel>(
  _viewParams,
);

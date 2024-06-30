import { ScrollBar } from '@lib/frontend/core/components/ScrollBar/ScrollBar';
import { _viewParams as _viewParamsBase } from '@lib/frontend/core/components/View/_View';
import {
  type _ViewPropsModel,
  type _ViewRefModel,
} from '@lib/frontend/core/components/View/_View.models';
import { View } from '@lib/frontend/core/components/View/View';
import { type MeasureModel, type PositionModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { partionObject } from '@lib/shared/core/utils/partionObject/partionObject';
import { Fragment, useState } from 'react';
import { type ViewProps } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export const _viewParams: ComposeComponentParamsModel<
  _ViewPropsModel,
  ViewProps,
  ViewStyleModel,
  _ViewRefModel
> = {
  Component: Fragment,

  getProps: (
    {
      isHorizontalScrollable,
      isHorizontalScrollableVisible = isHorizontalScrollable,
      isVerticalScrollable,
      isVerticalScrollableVisible = isVerticalScrollable,
      onScroll,
      style,
      testID,
      ...props
    },
    theme,
    ref,
  ) => {
    const [stylesView, stylesContainer] = partionObject(
      StyleSheet.flatten(style) as Record<string, unknown>,
      (_, k) =>
        // ['height', 'width', 'alignSelf', 'justifySelf', 'flex'].includes(k) ||
        ['alignSelf', 'justifySelf', 'flex'].includes(k) ||
        k.startsWith('margin') ||
        k.startsWith('border'),
    );

    const [measure, measureSet] = useState<MeasureModel>();
    const [measureContent, measureContentSet] = useState<MeasureModel>();
    const [value, valueSet] = useState<PositionModel>();

    const isHorizontalScrollableVisibleF =
      isHorizontalScrollable &&
      isHorizontalScrollableVisible &&
      (measure?.width ?? 0) < (measureContent?.width ?? 0);
    const isVerticalScrollableVisibleF =
      isVerticalScrollable &&
      isVerticalScrollableVisible &&
      (measure?.height ?? 0) < (measureContent?.height ?? 0);
    console.warn(isVerticalScrollableVisibleF);
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
            position: 'relative',
            ...stylesView,
          }}
          testID={testID}>
          <ScrollView
            {...(_viewParamsBase.getProps && _viewParamsBase.getProps(props, theme, ref))}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            contentContainerStyle={{ ...stylesContainer, flexGrow: 1 }}
            horizontal={isHorizontalScrollable ?? false}
            onContentSizeChange={(width, height) => measureContentSet({ height, width })}
            onLayout={({
              nativeEvent: {
                layout: { height, width },
              },
            }) => {
              measureSet({ height, width });
              props.onMeasure && props.onMeasure({ height, width });
            }}
            onScroll={({ nativeEvent }) => {
              const { x, y } = nativeEvent.contentOffset;
              valueSet({ x, y });
              onScroll && onScroll({ x, y });
            }}
            ref={ref}
            scrollEnabled
            scrollEventThrottle={16}
            scrollToOverflowEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />

          {isHorizontalScrollableVisibleF && (
            <ScrollBar
              contentSize={measureContent?.width}
              isHorizontal
              size={measure?.width}
              value={value?.x}
            />
          )}

          {isVerticalScrollableVisibleF && (
            <ScrollBar
              contentSize={measureContent?.height}
              size={measure?.height}
              value={value?.y}
            />
          )}
        </View>
      ),
    };
  },
};

export const _View = composeComponent<_ViewPropsModel, ViewProps, ViewStyleModel, _ViewRefModel>(
  _viewParams,
);

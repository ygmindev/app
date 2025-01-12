import { ScrollBar } from '@lib/frontend/core/components/ScrollBar/ScrollBar';
import { ScrollButton } from '@lib/frontend/core/components/ScrollButton/ScrollButton';
import { getViewParams as getViewParamsBase } from '@lib/frontend/core/components/View/_View';
import {
  type _ViewPropsModel,
  type _ViewRefModel,
} from '@lib/frontend/core/components/View/_View.models';
import { View } from '@lib/frontend/core/components/View/View';
import { SCROLL_TYPE } from '@lib/frontend/core/components/View/View.constants';
import {
  type ChildrenPropsModel,
  type MeasureModel,
  type PositionModel,
  type RefPropsModel,
} from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { partionObject } from '@lib/shared/core/utils/partionObject/partionObject';
import {
  type ComponentType,
  type ForwardedRef,
  Fragment,
  type RefObject,
  useMemo,
  useState,
} from 'react';
import { ScrollView, type ScrollViewProps, StyleSheet } from 'react-native';

const viewParamsBase = getViewParamsBase();

export const getViewParams = <
  TProps extends _ViewPropsModel,
  TResult extends ScrollViewProps,
  TRef extends _ViewRefModel,
>({
  Component = ScrollView as unknown as ComponentType<TResult>,
  getProps,
  stylers,
}: PartialModel<
  ComposeComponentParamsModel<TProps, TResult, ViewStyleModel, TRef>
> = {}): ComposeComponentParamsModel<TProps, ChildrenPropsModel, ViewStyleModel, TRef> => ({
  Component: Fragment,

  getProps: (props, theme, ref) => {
    const [stylesView, stylesContainer] = useMemo(
      () =>
        partionObject(
          StyleSheet.flatten(props.style) as Record<string, unknown>,
          (_, k) =>
            ['alignSelf', 'justifySelf', 'flex', 'width'].includes(k) ||
            k.startsWith('margin') ||
            k.startsWith('border'),
        ),
      [props.style],
    );

    const [measure, measureSet] = useState<MeasureModel>();
    const [measureContent, measureContentSet] = useState<MeasureModel>();
    const [value, valueSet] = useState<PositionModel>();

    const isHorizontalScrollableVisibleF =
      props.isHorizontalScrollableVisible ??
      (props.isHorizontalScrollable && (measure?.width ?? 0) < (measureContent?.width ?? 0));

    const isVerticalScrollableVisibleF =
      props.isVerticalScrollableVisible ??
      (props.isVerticalScrollable && (measure?.height ?? 0) < (measureContent?.height ?? 0));

    const propsF = {
      ...viewParamsBase.getProps?.(props, theme, ref as ForwardedRef<_ViewRefModel>),
      ...getProps?.(props, theme, ref),
      alwaysBounceHorizontal: false,
      alwaysBounceVertical: false,
      contentContainerStyle: { ...stylesContainer, flexGrow: 1 },
      horizontal: props.isHorizontalScrollable ?? false,
      onContentSizeChange: (width, height) => measureContentSet({ height, width }),
      onLayout: ({
        nativeEvent: {
          layout: { height, width },
        },
      }) => {
        measureSet({ height, width });
        props.onMeasure && props.onMeasure({ height, width });
      },
      onScroll: ({ nativeEvent }) => {
        const { x, y } = nativeEvent.contentOffset;
        valueSet({ x, y });
        props.onScroll?.({ x, y });
      },
      ref,
      scrollEnabled: true,
      scrollEventThrottle: 16,
      scrollToOverflowEnabled: true,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
    } as TResult & RefPropsModel<TRef>;

    const isBar = (props.scrollType ?? SCROLL_TYPE.BAR) === SCROLL_TYPE.BAR;
    const ScrollComponent = isBar ? ScrollBar : ScrollButton;

    const handleScrollTo = (position: PositionModel): void => {
      (ref as RefObject<ScrollView>).current?.scrollTo(position);
    };

    return {
      children: (
        <View
          style={{
            display: 'flex',
            flex:
              stylesView.width || stylesView.height
                ? undefined
                : props.isVerticalScrollable
                  ? 1
                  : undefined,
            overflow: 'hidden',
            position: 'relative',
            ...stylesView,
          }}
          testID={props.testID}>
          <Component {...propsF} />

          {isHorizontalScrollableVisibleF && (
            <ScrollComponent
              contentSize={measureContent?.width}
              isHorizontal
              onScrollTo={handleScrollTo}
              size={measure?.width}
              value={value?.x}
            />
          )}

          {isVerticalScrollableVisibleF && (
            <ScrollComponent
              contentSize={measureContent?.height}
              onScrollTo={handleScrollTo}
              size={measure?.height}
              value={value?.y}
            />
          )}
        </View>
      ),
    };
  },

  stylers,
});

export const _View =
  composeComponent(getViewParams<_ViewPropsModel, ScrollViewProps, _ViewRefModel>());

import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

export const _viewParams: ComposeComponentParamsModel<_ViewPropsModel, ViewProps> = {
  Component: View,

  getProps: ({
    children,
    onMeasure,
    onMouseEnter,
    onMouseLeave,
    onResponderGrant,
    onResponderRelease,
  }) => ({
    children,

    onLayout: onMeasure
      ? (e) => {
          const { height, width, x, y } = e.nativeEvent.layout;
          onMeasure({ height, width, x, y });
        }
      : undefined,

    onMouseEnter: () => onMouseEnter && onMouseEnter(),

    onMouseLeave: () => onMouseLeave && onMouseLeave(),

    onResponderGrant: () => onResponderGrant && onResponderGrant(),

    onResponderRelease: () => onResponderRelease && onResponderRelease(),
  }),
};

export const _View = composeComponent<_ViewPropsModel, ViewProps>(_viewParams);

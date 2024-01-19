import { type ViewProps } from 'react-native';
import { View } from 'react-native';

import {
  type _ViewPropsModel,
  type _ViewRefModel,
} from '@lib/frontend/core/components/View/_View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';

export const _viewParams: ComposeComponentParamsModel<
  _ViewPropsModel,
  ViewProps,
  ViewStyleModel,
  _ViewRefModel
> = {
  Component: View,

  getProps: ({
    children,
    isFocusable = false,
    isHidden,
    onMeasure,
    onMouseEnter,
    onMouseLeave,
    onResponderGrant,
    onResponderRelease,
  }) => ({
    children,

    focusable: isFocusable,

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

    pointerEvents: isHidden ? 'none' : undefined,
  }),
};

export const _View = composeComponent<_ViewPropsModel, ViewProps, ViewStyleModel, _ViewRefModel>(
  _viewParams,
);

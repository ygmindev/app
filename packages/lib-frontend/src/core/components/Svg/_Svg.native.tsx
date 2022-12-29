import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { SvgProps } from 'react-native-svg';
import { Svg } from 'react-native-svg';

export const _Svg = composeComponent<_SvgPropsModel, SvgProps>({
  getComponent: () => Svg,

  getProps: ({ children, height = 0, isFullHeight, isFullWidth, width = 0 }) => ({
    children,
    height: isFullHeight ? '100%' : height,
    width: isFullWidth ? '100%' : width,
  }),
});

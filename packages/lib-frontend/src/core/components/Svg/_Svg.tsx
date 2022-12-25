import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { SVGProps } from 'react';

export const _Svg = composeComponent<_SvgPropsModel, SVGProps<SVGSVGElement>>({
  getComponent: 'svg',
  getProps: ({ children, height = 0, isFullHeight, isFullWidth, width = 0 }) => ({
    children,
    height: isFullHeight ? '100%' : height,
    width: isFullWidth ? '100%' : width,
  }),
  isWeb: true,
});

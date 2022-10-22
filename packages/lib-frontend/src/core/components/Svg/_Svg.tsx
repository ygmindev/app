import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { SVGProps } from 'react';

export const _Svg = composeComponent<_SvgPropsModel, SVGProps<SVGSVGElement>>({
  Component: 'svg',
  getProps: ({ children, height, width }) => ({ children, height, width }),
  isWeb: true,
});

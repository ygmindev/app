import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { SvgProps } from 'react-native-svg';
import { Svg } from 'react-native-svg';

export const _Svg = composeComponent<_SvgPropsModel, SvgProps>({
  Component: Svg,
  getProps: ({ children, height, width }) => ({ children, height, width }),
});

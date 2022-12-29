import { _Svg } from '@lib/frontend/core/components/Svg/_Svg';
import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import type { SvgPropsModel } from '@lib/frontend/core/components/Svg/Svg.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const Svg = composeComponent<SvgPropsModel, _SvgPropsModel>({
  getComponent: () => _Svg,
});

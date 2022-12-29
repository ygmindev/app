import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';

export interface _SkeletonPropsModel extends ChildrenPropsModel, _SvgPropsModel {
  backgroundColor?: string;
  foregroundColor?: string;
}

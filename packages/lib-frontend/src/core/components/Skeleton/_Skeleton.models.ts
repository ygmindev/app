import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';

export interface _SkeletonPropsModel extends WithChildrenPropsModel, _SvgPropsModel {
  backgroundColor?: string;
  foregroundColor?: string;
}

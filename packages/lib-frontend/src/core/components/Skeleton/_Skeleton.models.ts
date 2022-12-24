import type { _SvgPropsModel } from '@lib/frontend/core/components/Svg/_Svg.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface _SkeletonPropsModel
  extends WithTestIdModel,
    WithChildrenPropsModel,
    _SvgPropsModel {
  backgroundColor?: string;
  foregroundColor?: string;
}

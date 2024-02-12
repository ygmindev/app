import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type AnimatableViewRefModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { type ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import { type ViewStylerParamsModel } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler.models';

export type WrapperPropsModel = ViewPropsModel &
  ViewStylerParamsModel &
  AnimatablePropsModel & {
    isAlign?: boolean;
    isCenter?: boolean;
    isDistribute?: boolean;
    isHorizontalCenter?: boolean;
    isVerticalCenter?: boolean;
  };

export type WrapperRefModel = AnimatableViewRefModel;

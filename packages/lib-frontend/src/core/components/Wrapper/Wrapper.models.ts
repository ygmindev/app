import { type AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import { type AnimatableViewRefModel } from '#lib-frontend/animation/components/AnimatableView/AnimatableView.models';
import { type ViewPropsModel } from '#lib-frontend/core/components/View/View.models';
import { type SpacingModel } from '#lib-frontend/style/utils/styler/spacingStyler/spacingStyler.models';
import { type ViewStylerParamsModel } from '#lib-frontend/style/utils/styler/viewStyler/viewStyler.models';

export type WrapperPropsModel = ViewPropsModel &
  ViewStylerParamsModel &
  AnimatablePropsModel & {
    isCenter?: boolean;
    isDistribute?: boolean;
    isHorizontalCenter?: boolean;
    isRowAlign?: boolean;
    isVerticalCenter?: boolean;
    s?: SpacingModel;
  };

export type WrapperRefModel = AnimatableViewRefModel;

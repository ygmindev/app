import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type PressableViewPropsModel } from '@lib/frontend/core/components/PressableView/PressableView.models';
import {
  type ScrollViewPropsModel,
  type ScrollViewRefModel,
} from '@lib/frontend/core/components/ScrollView/ScrollView.models';
import { type ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import { type ViewStylerParamsModel } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler.models';

export type WrapperPropsModel = (ViewPropsModel & PressableViewPropsModel & ScrollViewPropsModel) &
  ViewStylerParamsModel &
  AnimatablePropsModel & {
    isAlign?: boolean;
    isCenter?: boolean;
    isDistribute?: boolean;
    isHorizontalCenter?: boolean;
    isVerticalCenter?: boolean;
  };

export type WrapperRefModel = ScrollViewRefModel;

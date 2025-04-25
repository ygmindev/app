import { _AnimatableView } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView';
import { type _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import {
  type AnimatableViewPropsModel,
  type AnimatableViewRefModel,
} from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const AnimatableView = composeComponent<
  AnimatableViewPropsModel,
  _AnimatableViewPropsModel,
  ViewStyleModel,
  AnimatableViewRefModel
>({ Component: _AnimatableView });

process.env.APP_IS_DEBUG && (AnimatableView.displayName = variableName({ AnimatableView }));

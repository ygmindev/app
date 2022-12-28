import { _AnimatableView } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView';
import type { _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import type { AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { viewParams } from '@lib/frontend/core/components/View/View';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const AnimatableView = composeComponent<AnimatableViewPropsModel, _AnimatableViewPropsModel>(
  {
    ...viewParams,

    getComponent: () => _AnimatableView,

    getProps: (props, theme) => ({
      ...(viewParams.getProps ? viewParams.getProps(props, theme) : {}),
    }),
  },
);

import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { _View } from '@lib/frontend/core/components/View/_View';
import { _View as _ViewPressable } from '@lib/frontend/core/components/View/_View.pressable';
import { _View as _ViewScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { forwardRef } from 'react';

export const View: RSFCModel<AnimatableRefModel, ViewPropsModel> = forwardRef(
  ({ ...props }, ref) => {
    const _Component =
      props.isHorizontalScrollable || props.isVerticalScrollable || props.onScroll
        ? _ViewScrollable
        : props.onPress || props.onPressIn || props.onPressOut
        ? _ViewPressable
        : _View;
    return (
      <_Component
        {...props}
        ref={ref}
      />
    );
  },
);

import { _View } from '@lib/frontend/core/components/View/_View';
import { type _ViewRefModel } from '@lib/frontend/core/components/View/_View.models';
import { _View as _ViewPressable } from '@lib/frontend/core/components/View/_View.pressable';
import { _View as _ViewScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import {
  type ViewPropsModel,
  type ViewRefModel,
} from '@lib/frontend/core/components/View/View.models';
import { type RSFCModel } from '@lib/frontend/core/core.models';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const View: RSFCModel<ViewRefModel, ViewPropsModel> = forwardRef(({ ...props }, ref) => {
  const Component =
    props.isHorizontalScrollable || props.isVerticalScrollable || props.onScroll
      ? _ViewScrollable
      : props.onPress || props.onPressIn || props.onPressOut
        ? _ViewPressable
        : _View;

  const refF = useRef<_ViewRefModel>(null);
  useImperativeHandle(ref, () => ({
    scrollTo: (position) => refF.current?.scrollTo(position),
  }));

  return (
    <Component
      {...props}
      ref={refF}
    />
  );
});

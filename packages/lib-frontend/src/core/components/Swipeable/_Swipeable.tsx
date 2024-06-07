import { type _SwipeablePropsModel } from '@lib/frontend/core/components/Swipeable/_Swipeable.models';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export const _Swipeable = composeComponent<
  _SwipeablePropsModel,
  PropsModel<typeof GestureDetector>
>({
  Component: GestureDetector,

  getProps: ({ children, onChange, onEnd, threshold }) => ({
    children,
    gesture: Gesture.Pan()
      .onUpdate((e) => onChange && onChange({ x: e.translationX, y: e.translationY }))
      .onEnd((e) => onEnd && onEnd({ x: e.translationX, y: e.translationY })),
  }),
});

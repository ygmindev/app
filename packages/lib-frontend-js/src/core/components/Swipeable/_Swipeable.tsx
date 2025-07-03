import { type _SwipeablePropsModel } from '@lib/frontend/core/components/Swipeable/_Swipeable.models';
import { SWIPEABLE_THRESHOLD } from '@lib/frontend/core/components/Swipeable/Swipeable.constants';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

export const _Swipeable = composeComponent<
  _SwipeablePropsModel,
  PropsModel<typeof GestureDetector>
>({
  Component: GestureDetector,

  getProps: ({ children, onChange, onEnd, onSwipe, threshold = SWIPEABLE_THRESHOLD }) => ({
    children,
    gesture: Gesture.Pan()
      .onStart(() => {
        'worklet';
        runOnJS(() => {
          console.log('Running on JS thread');
        })();
      })
      .onUpdate((e) => {
        'worklet';
        onChange?.({ x: e.translationX, y: e.translationY });
      })
      .onEnd((e) => {
        'worklet';
        if (onSwipe) {
          if (e.translationX >= threshold) {
            onSwipe(DIRECTION.RIGHT);
          } else if (e.translationX <= -threshold) {
            onSwipe(DIRECTION.LEFT);
          } else if (e.translationY >= threshold) {
            onSwipe(DIRECTION.BOTTOM);
          } else if (e.translationY <= -threshold) {
            onSwipe(DIRECTION.TOP);
          }
        }
        onEnd?.({ x: e.translationX, y: e.translationY });
      }),
  }),
});

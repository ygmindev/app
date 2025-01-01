import { type _SkeletonPropsModel } from '@lib/frontend/animation/components/Skeleton/_Skeleton.models';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type MotiTransition } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { ReduceMotion } from 'react-native-reanimated';

export const _Skeleton = composeComponent<_SkeletonPropsModel, PropsModel<typeof Skeleton>>({
  Component: Skeleton,

  getProps: ({ backgroundColor, borderRadius, children, foregroundColor, height, width }) => ({
    backgroundColor,
    children,
    colorMode: 'light',
    height,
    radius: borderRadius,
    transition: { reduceMotion: ReduceMotion.Always, type: 'timing' } as MotiTransition,
    width,
  }),
});

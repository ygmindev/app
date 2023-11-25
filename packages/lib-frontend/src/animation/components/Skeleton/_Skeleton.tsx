import { Skeleton } from 'moti/skeleton';

import { type _SkeletonPropsModel } from '#lib-frontend/animation/components/Skeleton/_Skeleton.models';
import { type PropsModel } from '#lib-frontend/core/core.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _Skeleton = composeComponent<_SkeletonPropsModel, PropsModel<typeof Skeleton>>({
  Component: Skeleton,

  getProps: ({ backgroundColor, children, foregroundColor, height, width }) => ({
    backgroundColor,
    children,
    colorMode: 'light',
    height,
    transition: { type: 'timing' },
    width,
  }),
});

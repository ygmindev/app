import { Skeleton } from 'moti/skeleton';

import { type _SkeletonGroupPropsModel } from '@lib/frontend/animation/components/SkeletonGroup/_SkeletonGroup.models';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _SkeletonGroup = composeComponent<
  _SkeletonGroupPropsModel,
  PropsModel<typeof Skeleton.Group>
>({
  Component: Skeleton.Group,

  getProps: ({ children }) => ({
    children,
    show: true,
  }),
});

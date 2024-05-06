import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { type SkeletonPropsModel } from '@lib/frontend/animation/components/Skeleton/Skeleton.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SkeletonPropsModel> = {
  Component: Skeleton,
  defaultProps: {},
  variants: [
    {
      props: {
        children: <></>,
      },
    },
  ],
};

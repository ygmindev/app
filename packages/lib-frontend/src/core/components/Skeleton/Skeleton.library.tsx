import { Skeleton } from '@lib/frontend/core/components/Skeleton/Skeleton';
import type { SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/Skeleton.models';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SkeletonPropsModel> = {
  Component: Skeleton,
  defaultProps: {},
  variants: [
    {
      props: {
        children: (
          <SvgShape
            shape={SVG_SHAPE.RECT}
            shapeProps={{ height: 100, width: 100 }}
          />
        ),
      },
    },
  ],
};

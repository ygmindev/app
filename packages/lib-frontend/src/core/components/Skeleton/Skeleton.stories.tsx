import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Skeleton } from '@lib/frontend/core/components/Skeleton/Skeleton';
import type { SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/Skeleton.models';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';

const { Story, meta } = withStory<SkeletonPropsModel>({
  defaultProps: {},
  target: Skeleton,
  variants: [
    {
      props: {
        children: <SvgShape shape={SVG_SHAPE.RECT} x={0} y={0} />,
      },
    },
  ],
});

export { Story, meta as default };

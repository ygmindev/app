import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Svg } from '@lib/frontend/core/components/Svg/Svg';
import type { SvgPropsModel } from '@lib/frontend/core/components/Svg/Svg.models';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';

const { Story, meta } = withStory<SvgPropsModel>({
  defaultProps: {},
  target: Svg,
  variants: [
    {
      props: {
        children: (
          <SvgShape
            shape={SVG_SHAPE.RECT}
            x={0}
            y={0}
          />
        ),
      },
    },
  ],
});

export { meta as default, Story };

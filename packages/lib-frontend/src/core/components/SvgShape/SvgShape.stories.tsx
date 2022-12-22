import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Svg } from '@lib/frontend/core/components/Svg/Svg';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import type { SFCModel } from '@lib/frontend/core/core.models';

const _Container: SFCModel<SvgShapePropsModel> = (props) => (
  <Svg>
    <SvgShape {...props} />
  </Svg>
);

const { Story, meta } = withStory<SvgShapePropsModel>({
  defaultProps: { height: 100, shape: SVG_SHAPE.RECT, width: 100, x: 0, y: 0 },
  displayName: 'SvgShape',
  target: _Container,
  variants: [],
});

export { meta as default, Story };

import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';

const { Story, meta } = withStory<SlidesPropsModel>({
  defaultProps: {},
  target: Slides,
  variants: [],
});

export { Story, meta as default };

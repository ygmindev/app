import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';

const { Story, meta } = withStory<SlidePropsModel>({
  defaultProps: {},
  target: Slide,
  variants: [],
});

export default meta;

export { Story };

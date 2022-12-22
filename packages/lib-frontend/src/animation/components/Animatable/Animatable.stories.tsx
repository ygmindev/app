import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Animatable } from '@lib/frontend/animation/components/Animatable/Animatable';
import type { AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';

const { Story, meta } = withStory<AnimatablePropsModel>({
  defaultProps: {},
  target: Animatable,
  variants: [],
});

export default meta;

export { Story };

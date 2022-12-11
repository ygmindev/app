import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Animatable } from '@lib/frontend/animation/components/Animatable/Animatable';
import type { AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';

const { Default, meta } = withStory<AnimatablePropsModel>({
  defaultProps: {},
  target: Animatable,
  variants: [],
});

export { Default, meta as default };

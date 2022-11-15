import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Animation } from '@lib/frontend/animation/components/Animation/Animation';
import type { AnimationPropsModel } from '@lib/frontend/animation/components/Animation/Animation.models';

const { Default, meta } = withStory<AnimationPropsModel>({
  defaultProps: {},
  target: Animation,
  variants: [],
});

export { Default, meta as default };

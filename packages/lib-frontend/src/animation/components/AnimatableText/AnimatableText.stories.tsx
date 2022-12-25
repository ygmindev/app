import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import type { AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';

const { Story, meta } = withStory<AnimatableTextPropsModel>({
  defaultProps: {},
  target: AnimatableText,
  variants: [],
});

export { Story, meta as default };

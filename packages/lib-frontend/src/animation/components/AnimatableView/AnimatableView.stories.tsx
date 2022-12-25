import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import type { AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';

const { Story, meta } = withStory<AnimatableViewPropsModel>({
  defaultProps: {},
  target: AnimatableView,
  variants: [],
});

export { meta as default, Story };

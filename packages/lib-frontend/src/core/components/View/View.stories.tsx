import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { View } from '@lib/frontend/core/components/View/View';
import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';

const { Story, meta } = withStory<ViewPropsModel>({
  defaultProps: {},
  target: View,
  variants: [],
});

export { Story, meta as default };

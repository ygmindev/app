import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { KeyboardContainer } from '@lib/frontend/platform/components/KeyboardContainer/KeyboardContainer';
import type { KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/KeyboardContainer.models';

const { Story, meta } = withStory<KeyboardContainerPropsModel>({
  defaultProps: {},
  target: KeyboardContainer,
  variants: [],
});

export { meta as default, Story };

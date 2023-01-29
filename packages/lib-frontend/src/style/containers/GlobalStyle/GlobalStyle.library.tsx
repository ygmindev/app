import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { GlobalStyle } from '@lib/frontend/style/containers/GlobalStyle/GlobalStyle';
import type { GlobalStylePropsModel } from '@lib/frontend/style/containers/GlobalStyle/GlobalStyle.models';

const { Story, meta } = withStory<GlobalStylePropsModel>({
  defaultProps: {},
  target: GlobalStyle,
  variants: [],
});

export { meta as default, Story };

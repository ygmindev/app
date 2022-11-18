import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { DevTools } from '@lib/frontend/dev/containers/DevTools/DevTools';
import type { DevToolsPropsModel } from '@lib/frontend/dev/containers/DevTools/DevTools.models';

const { Default, meta } = withStory<DevToolsPropsModel>({
  defaultProps: {},
  target: DevTools,
  variants: [],
});

export { Default, meta as default };

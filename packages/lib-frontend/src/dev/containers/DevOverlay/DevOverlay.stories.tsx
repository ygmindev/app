import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { DevOverlay } from '@lib/frontend/dev/containers/DevOverlay/DevOverlay';
import type { DevOverlayPropsModel } from '@lib/frontend/dev/containers/DevOverlay/DevOverlay.models';

const { Default, meta } = withStory<DevOverlayPropsModel>({
  defaultProps: {},
  target: DevOverlay,
  variants: [],
});

export { Default, meta as default };

import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Active } from '@lib/frontend/route/components/Active/Active';
import type { ActivePropsModel } from '@lib/frontend/route/components/Active/Active.models';

const { Story, meta } = withStory<ActivePropsModel>({
  defaultProps: {},
  target: Active,
  variants: [],
});

export { meta as default, Story };

import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Active } from '@lib/frontend/routing/components/Active/Active';
import type { ActivePropsModel } from '@lib/frontend/routing/components/Active/Active.models';

const { Default, meta } = withStory<ActivePropsModel>({
  defaultProps: {},
  target: Active,
  variants: [],
});

export { Default, meta as default };

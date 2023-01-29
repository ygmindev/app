import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';

const { Story, meta } = withStory<TooltipPropsModel>({
  defaultProps: {},
  target: Tooltip,
  variants: [],
});

export { Story, meta as default };

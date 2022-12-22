import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Story, meta } = withStory<TooltipPropsModel>({
  defaultProps: { children: 'text', tooltip: 'tooltip' },
  target: Tooltip,
  variants: [{ props: { tooltip: <WrapperFixture text="tooltip" /> } }],
});

export { Story, meta as default };

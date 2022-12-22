import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import type { ActivatePropsModel } from '@lib/frontend/core/components/Activate/Activate.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Story, meta } = withStory<ActivatePropsModel>({
  defaultProps: {
    children: (isActive) => <WrapperFixture text={`${isActive}`} />,
  },
  target: Activate,
  variants: [{ props: { isHoverable: false } }],
});

export { Story, meta as default };

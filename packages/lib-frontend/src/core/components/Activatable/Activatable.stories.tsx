import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Story, meta } = withStory<ActivatablePropsModel>({
  defaultProps: {
    children: (isActive) => <WrapperFixture text={`${isActive}`} />,
  },
  target: Activatable,
  variants: [{ props: { isHoverable: false } }],
});

export { meta as default, Story };

import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Drop } from '@lib/frontend/core/components/Drop/Drop';
import type { DropPropsModel } from '@lib/frontend/core/components/Drop/Drop.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Story, meta } = withStory<DropPropsModel>({
  defaultProps: {
    children: (isActive) => <WrapperFixture text={`${isActive}`} />,
    render: (isActive) => <WrapperFixture text={`${isActive}`} />,
  },
  target: Drop,
});

export { meta as default, Story };

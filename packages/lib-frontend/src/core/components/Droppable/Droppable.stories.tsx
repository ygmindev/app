import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Story, meta } = withStory<DroppablePropsModel>({
  defaultProps: {
    anchor: (isActive) => <WrapperFixture text={`${isActive}`} />,
    children: <WrapperFixture />,
  },
  target: Droppable,
});

export { meta as default, Story };

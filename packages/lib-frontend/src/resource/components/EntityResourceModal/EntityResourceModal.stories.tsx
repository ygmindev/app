import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { EntityResourceModal } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal';
import type { EntityResourceModalPropsModel } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.models';

const { Default, meta } = withStory<EntityResourceModalPropsModel>({
  defaultProps: {},
  target: EntityResourceModal,
  variants: [],
});

export { Default, meta as default };

import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { EntityResourceModal } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal';
import type { EntityResourceModalPropsModel } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.models';
import type { DummyEmbeddedResourceFormModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEntityResourceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Default, meta } = withStory<
  EntityResourceModalPropsModel<DummyEntityResourceModel, DummyEmbeddedResourceFormModel>
>({
  defaultProps: {},
  target: EntityResourceModal,
  variants: [],
});

export { Default, meta as default };

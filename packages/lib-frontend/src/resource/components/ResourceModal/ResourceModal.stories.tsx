import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ResourceModal } from '@lib/frontend/resource/components/ResourceModal/ResourceModal';
import type { ResourceModalPropsModel } from '@lib/frontend/resource/components/ResourceModal/ResourceModal.models';
import type { DummyEmbeddedResourceFormModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEntityResourceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Default, meta } = withStory<
  ResourceModalPropsModel<DummyEntityResourceModel, DummyEmbeddedResourceFormModel>
>({
  defaultProps: { columns: [] },
  target: ResourceModal,
  variants: [],
});

export { Default, meta as default };

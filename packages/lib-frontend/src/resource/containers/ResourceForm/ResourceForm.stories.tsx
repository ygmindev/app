import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import type { ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import type { DummyEmbeddedResourceFormModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEntityResourceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Story, meta } = withStory<
  ResourceFormPropsModel<DummyEntityResourceModel, DummyEmbeddedResourceFormModel>
>({
  defaultProps: { columns: [] },
  target: ResourceForm,
  variants: [],
});

export default meta;

export { Story };

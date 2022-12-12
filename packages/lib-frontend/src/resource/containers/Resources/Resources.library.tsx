import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Resources } from '@lib/frontend/resource/containers/Resources/Resources';
import type { ResourcesPropsModel } from '@lib/frontend/resource/containers/Resources/Resources.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Default, meta } = withStory<
  ResourcesPropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  defaultProps: {
    columns: [],
    fields: [],
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  },
  target: Resources,
  variants: [],
});

export { Default, meta as default };

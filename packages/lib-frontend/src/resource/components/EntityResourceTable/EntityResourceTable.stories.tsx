import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { EntityResourceTable } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Default, meta } = withStory<
  EntityResourceTablePropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  defaultProps: {
    columns: [],
    fields: [],
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  },
  target: EntityResourceTable,
  variants: [],
});

export { Default, meta as default };

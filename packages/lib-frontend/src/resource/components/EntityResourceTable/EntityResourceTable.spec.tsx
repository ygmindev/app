import { EntityResourceTable } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Component, displayName, testID } = withTestComponent<
  EntityResourceTablePropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  target: EntityResourceTable<DummyEntityResourceModel, DummyEntityResourceFormModel>,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

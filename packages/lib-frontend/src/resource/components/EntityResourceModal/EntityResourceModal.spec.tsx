import { EntityResourceModal } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal';
import type { EntityResourceModalPropsModel } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Component, displayName, testID } = withTestComponent<
  EntityResourceModalPropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  target: EntityResourceModal,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

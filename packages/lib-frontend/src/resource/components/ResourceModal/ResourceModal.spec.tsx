import { ResourceModal } from '@lib/frontend/resource/components/ResourceModal/ResourceModal';
import type { ResourceModalPropsModel } from '@lib/frontend/resource/components/ResourceModal/ResourceModal.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Component, displayName, testID } = withTestComponent<
  ResourceModalPropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  target: ResourceModal,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

import { Resources } from '@lib/frontend/resource/components/Resources/Resources';
import type { ResourcesPropsModel } from '@lib/frontend/resource/components/Resources/Resources.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

const { Component, displayName, testID } = withTestComponent<
  ResourcesPropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  target: Resources<DummyEntityResourceModel, DummyEntityResourceFormModel>,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import type { ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';

const { Component, displayName, testID } = withTestComponent<
  ResourceFormPropsModel<DummyEntityResourceModel, DummyEntityResourceFormModel>
>({
  target: ResourceForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
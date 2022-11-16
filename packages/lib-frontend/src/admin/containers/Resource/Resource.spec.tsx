import { Resource } from '@lib/frontend/admin/containers/Resource/Resource';
import type { ResourcePropsModel } from '@lib/frontend/admin/containers/Resource/Resource.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourcePropsModel>({
  target: Resource,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

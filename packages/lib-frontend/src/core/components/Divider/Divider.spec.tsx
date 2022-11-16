import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import type { DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DividerPropsModel>({
  target: Divider,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

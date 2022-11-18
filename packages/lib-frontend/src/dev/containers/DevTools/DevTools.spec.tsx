import { DevTools } from '@lib/frontend/dev/containers/DevTools/DevTools';
import type { DevToolsPropsModel } from '@lib/frontend/dev/containers/DevTools/DevTools.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DevToolsPropsModel>({
  target: DevTools,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

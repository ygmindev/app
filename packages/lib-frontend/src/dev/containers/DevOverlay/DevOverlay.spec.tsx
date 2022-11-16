import { DevOverlay } from '@lib/frontend/dev/containers/DevOverlay/DevOverlay';
import type { DevOverlayPropsModel } from '@lib/frontend/dev/containers/DevOverlay/DevOverlay.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DevOverlayPropsModel>({
  target: DevOverlay,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

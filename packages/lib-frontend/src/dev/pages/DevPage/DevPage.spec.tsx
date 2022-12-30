import { DevPage } from '@lib/frontend/dev/pages/DevPage/DevPage';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DevPagePropsModel>({
  target: DevPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

import { AppHome } from '@lib/frontend/app/containers/AppHome/AppHome';
import type { AppHomePropsModel } from '@lib/frontend/app/containers/AppHome/AppHome.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppHomePropsModel>({
  target: AppHome,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

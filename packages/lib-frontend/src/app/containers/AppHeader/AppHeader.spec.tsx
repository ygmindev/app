import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import type { AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppHeaderPropsModel>({
  target: AppHeader,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

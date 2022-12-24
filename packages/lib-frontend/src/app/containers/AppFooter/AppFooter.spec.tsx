import { AppFooter } from '@lib/frontend/app/containers/AppFooter/AppFooter';
import type { AppFooterPropsModel } from '@lib/frontend/app/containers/AppFooter/AppFooter.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppFooterPropsModel>({
  target: AppFooter,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});

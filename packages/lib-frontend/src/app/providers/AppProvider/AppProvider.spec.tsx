import { AppProvider } from '@lib/frontend/app/providers/AppProvider/AppProvider';
import type { AppProviderPropsModel } from '@lib/frontend/app/providers/AppProvider/AppProvider.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppProviderPropsModel>({
  target: AppProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
